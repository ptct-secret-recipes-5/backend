const db = require("../../db-config");

function find() {
  return db("users").select("user_id", "username");
}

function findByUsername(username) {
  return db("users")
    .where("username", username)
    .first("user_id", "username", "password", "email");
}

async function add(user) {
  await db("users").insert(user);
  return db("users")
    .where("username", user.username)
    .first("user_id", "username", "email");
}

module.exports = {
  add,
  find,
  findByUsername,
};
