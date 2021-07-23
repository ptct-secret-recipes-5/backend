const express = require("express");
const Recipes = require("./recipes-model");
const { checkRecipePayload, checkRecipeId } = require("./recipes-middleware");

const router = express.Router();

router.get("/api/recipes", async (req, res, next) => {
  try {
    const allRecipes = await Recipes.getRecipes();
    res.status(200).json(allRecipes);
  } catch (err) {
    next(err);
  }
});

router.get("/api/recipes/:recipe_id", checkRecipeId, async (req, res) => {
  res.status(200).json(req.recipeID);
});

router.post("/api/recipes", checkRecipePayload, async (req, res, next) => {
  try {
    const newRecipe = await Recipes.add(req.body);
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
});

router.put("/api/recipes/:recipe_id", checkRecipeId, async (req, res, next) => {
  const { recipe_id } = req.params;

  try {
    const updatedRecipe = await Recipes.updateById(recipe_id, req.body);
    res.status(200).json(updatedRecipe);
  } catch (err) {
    next(err);
  }
});

router.delete(
  "/api/recipes/:recipe_id",
  checkRecipeId,
  async (req, res, next) => {
    const { recipe_id } = req.params;

    try {
      const deleted = await Recipes.deleteById(recipe_id);
      res.status(200).json(deleted);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
