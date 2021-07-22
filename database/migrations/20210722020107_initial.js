exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.text("username", 200).notNull().unique();
    table.text("password", 200).notNull();
    table.text("email").notNull();
  });

  await knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id");
    table
      .integer("user_id")
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.text("recipe_name").notNull();
    table.text("source");
    table.text("ingredients").notNull();
    table.text("category").notNull();
    table.text("instructions").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("users");
};
