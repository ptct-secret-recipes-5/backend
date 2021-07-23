const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const { validateRegister, checkUsernameFree } = require("./users-middleware");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to ptct-secret-recipes-5 api" });
});

router.get("/api/users", async (req, res, next) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/api/auth/register",
  validateRegister,
  checkUsernameFree,
  async (req, res, next) => {
    try {
      const { username, password, email } = req.body;
      const newUser = await Users.add({
        username,
        password: await bcrypt.hash(
          password,
          parseInt(process.env.BCRYPT_TIME_COMPLEXITY)
        ),
        email,
      });
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/api/auth/login", async (req, res, next) => {
  try {
    const dbPass = await Users.findByUsername(req.body.username);
    //console.log(dbPass);
    const bodyPass = req.body.password;

    if (!dbPass) {
      return res.status(401).json({
        message: "Incorrect username or password",
      });
    }

    const passwordValidation = await bcrypt.compare(bodyPass, dbPass.password);

    if (!passwordValidation) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    const token = jwt.sign(
      {
        userID: dbPass.user_id,
        username: dbPass.username,
        successfulLogin: true,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.status(200).json({
      message: `Welcome ${req.body.username}`,
      username: dbPass.username,
      token: token,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
