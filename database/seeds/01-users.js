exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "pollyPY",
      password: "testthisapp",
      email: "polly123@gmail.com",
    },
    {
      username: "dolly123",
      password: "abcd1234",
      email: "dolly123@gmail.com",
    },
  ]);
};
