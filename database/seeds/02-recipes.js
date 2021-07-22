exports.seed = async function (knex) {
  await knex("recipes").insert([
    {
      user_id: 1,
      recipe_name: "To Die For Blueberry Muffins",
      source: "Grandma's recipe",
      ingredients:
        "1 ½ cups all-purpose flour, ¾ cup white sugar, ½ teaspoon salt, 2 teaspoons baking powder, ⅓ cup vegetable oil, 1 egg, ⅓ cup milk, or more as needed, 1 cup fresh blueberries, ½ cup white sugar, ⅓ cup all-purpose flour, ¼ cup butter, cubed,1 ½ teaspoons ground cinnamon",
      category: "Bakery",
      instructions:
        "Step 1 Preheat oven to 400 degrees F (200 degrees C). Grease muffin cups or line with muffin liners. Step 2 Combine 1 1/2 cups flour, 3/4 cup sugar, salt and baking powder. Place vegetable oil into a 1 cup measuring cup; add the egg and add enough milk to reach the 1-cup mark. Mix this with flour mixture. Fold in blueberries. Fill muffin cups right to the top, and sprinkle with crumb topping mixture. Step 3 To Make Crumb Topping: Mix together 1/2 cup sugar, 1/3 cup flour, 1/4 cup butter, and 1 1/2 teaspoons cinnamon. Mix with fork, and sprinkle over muffins before baking. Step 4 Bake for 20 to 25 minutes in the preheated oven, or until done.",
    },
    {
      user_id: 2,
      recipe_name: "Maple Salmon",
      source: "My recipe",
      ingredients:
        "¼ cup maple syrup, 2 tablespoons soy sauce, 1 clove garlic, minced, ¼ teaspoon garlic salt, ⅛ teaspoon ground black pepper, 1 pound salmon",
      category: "Dinner",
      instructions:
        "Step 1 In a small bowl, mix the maple syrup, soy sauce, garlic, garlic salt, and pepper. Step 2 Place salmon in a shallow glass baking dish, and coat with the maple syrup mixture. Cover the dish, and marinate salmon in the refrigerator 30 minutes, turning once. Step 3 Preheat oven to 400 degrees F (200 degrees C). Step 4 Place the baking dish in the preheated oven, and bake salmon uncovered 20 minutes, or until easily flaked with a fork.",
    },
  ]);
};
