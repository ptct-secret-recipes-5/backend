const db = require("./recipes-model");

function checkRecipePayload(req, res, next) {
  const { recipe_name, ingredients, category, instructions } = req.body;

  if (!recipe_name || !ingredients || !category || !instructions) {
    return res.status(400).json({
      message:
        "recipe name, ingredients, category, and/or instructions are missing",
    });
  }
  next();
}

async function checkRecipeId(req, res, next) {
  const { recipe_id } = req.params;

  try {
    const recipeID = await db.getRecipeById(recipe_id);
    if (!recipeID) {
      res.status(404).json({
        message: "recipe ID not found",
      });
    } else {
      req.recipeID = recipeID;
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkRecipePayload,
  checkRecipeId,
};
