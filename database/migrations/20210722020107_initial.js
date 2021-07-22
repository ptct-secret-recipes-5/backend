exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.text("username", 200).notNull().unique();
    table.text("password", 200).notNull();
    table.text("email").notNull();
  });

  await knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id");
    table.text("recipe_name").notNull().unique();
    table.text("source");
    table.date("date").notNull();
    table.text("start_time").notNull();
    table.tinyint("duration_mins");
    table.text("intensity");
    table.text("location").notNull();
    table.tinyint("current_registered").defaultTo(0);
    table.tinyint("max_recipe_size");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("roles");
  await knex.schema.dropTableIfExists("recipees");
};
