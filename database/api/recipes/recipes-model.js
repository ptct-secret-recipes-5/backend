const db = require("../../db-config");

function getRecipes() {
  return db("recipes");
}

function getRecipeById(recipe_id) {
  return db("recipes").where("recipe_id", recipe_id).first();
}

function getRecipeByName(recipe_name) {
  return db("recipes").where("recipe_name", recipe_name).first();
}

async function add(newRecipe) {
  await db("recipes").insert(newRecipe);
  return getRecipeByName(newRecipe.recipe_name);
}

async function updateById(recipe_id, thisrecipe) {
  await db("recipes").where("recipe_id", recipe_id).update(thisrecipe);
  return getRecipeById(recipe_id);
}

const deleteById = async (recipe_id) => {
  const tobeDelete = await getRecipeById(recipe_id);
  await db("recipes").where("recipe_id", recipe_id).del();
  return tobeDelete;
};

module.exports = {
  getRecipes,
  getRecipeById,
  getRecipeByName,
  add,
  updateById,
  deleteById,
};
