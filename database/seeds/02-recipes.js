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
    {
      user_id: 0,
      recipe_name: "Spicy Sushi Mayo",
      source: "Cicely",
      ingredients:
        "2 tablespoons mayonnaise 2 teaspoons Sriracha hot sauce ¼ teaspoon sesame oil",
      category: "Appetizers",
      instructions:
        "Step 1 Mix mayonnaise, Sriracha hot sauce, and sesame oil together in a bowl using a fork until smooth.",
    },
    {
      user_id: 1,
      recipe_name: "Sweet and Sour Faux Meat Balls",
      source: "Buitoni",
      ingredients:
        "¼ cup vegetable oil ¼ cup distilled white vinegar 1 cup apricot jam 1 teaspoon dried oregano 1 dash hot pepper sauce 1 cup shredded Cheddar cheese ½ cup cottage cheese 1 cup chopped pecans 1 cup ketchup ¼ cup minced onion 1 teaspoon salt 5 eggs, beaten 2 cups Italian seasoned bread crumbs",
      category: "main dish",
      instructions:
        "Step 1 To make Sweet and Sour Sauce: In a medium bowl combine the oil, vinegar, jam, ketchup, grated onion, salt, oregano and hot pepper sauce. Stir until well combined. Step 2 Preheat oven to 350 degrees F (175 degrees C). Step 3 In a large bowl combine the eggs, Cheddar cheese, cottage cheese, chopped onion, pecans, basil, salt, sage and bread crumbs. Mix well and form into 2 inch balls or patties. Place them in a 9x13 inch baking dish and cover them with sweet and sour sauce. Bake at 350 degrees F (175 degrees C) for 35 to 40 minutes.",
    },
    {
      user_id: 2,
      recipe_name: "Garlic Shrimp Scampi Pasta",
      source: "Dora",
      ingredients:
        "1 (16 ounce) package linguine pasta 2 tablespoons unsalted butter 3 tablespoons parsley flakes, divided 2 cups medium shrimp, shelled 5 cloves garlic, chopped 2 tablespoons lemon juice",
      category: "main dish",
      instructions:
        "Step 1 Bring a large pot of lightly salted water to a boil. Cook linguine at a boil until tender yet firm to the bite, about 11 minutes. Step 2 While linguine is cooking, melt butter in a frying pan. Mix in 1 tablespoon parsley, salt, and pepper. Add shrimp and cook for 2 minutes, flipping 1 or 2 times. Add 1 tablespoon parsley, lemon juice, and garlic. Cook for another 2 minutes, flipping 1 or 2 more times. Pour in sherry and cook for 1 minute. Step 3 Drain linguine and divide among plates. Spoon shrimp on top, reserving juices for dipping or to pour over pasta at the table. Sprinkle remaining 1 tablespoon parsley over each plate for garnish.",
    },
    {
      user_id: 3,
      recipe_name: "Keto Fried Chicken",
      source: "Merry",
      ingredients:
        "10 ounce chicken salt to taste pepper 1 tablespoon blanched almond flour ½ teaspoon granulated garlic avocado oil",
      category: "Main Dish",
      instructions:
        "Step 1 Cut chicken and Mix spices. Step 2 Put flour and spices Step 3 Pour enough avocado oil,Turn and cook on the other side until internal temperature reaches 165 degrees F (74 degrees C), about 2 more minutes.",
    },
  ]);
};
