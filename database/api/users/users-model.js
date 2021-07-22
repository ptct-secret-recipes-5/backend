const db = require("../../db-config");

function find() {
  return db("users");
}

function findByUsername(username) {
  return db("users")
    .where("username", username)
    .select("user_id", "username", "password", "email");
}

async function add(user) {
  await db("users").insert(user);
  return db("users")
    .where("username", user.username)
    .select("user_id", "username", "email");
}

module.exports = {
  add,
  find,
  findByUsername,
};
