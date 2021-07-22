Backend for Build week ptct-secret-recipes-5 project <br/>

### Register Schema

(/api/auth/register)<br/>
Send a .post() to the endpoint with the following information.<br/>
Make sure you are sending data to the database as structure below:

```js
{
"username": "Alice2001",
"password": "testalice",
"email": "abc123@gmail.com"
}
```

### Login Schema

(/api/auth/login)<br/>
Send a .post() to the endpoint with the following information:<br/>
Make sure you are sending data to the database as structure below:

```js
{
"username": "Alice2001",
"password": "testalice"
}
```

You will receive a token back for authentication<br/>

### USERS

|  CRUD  | METHOD | ROUTE              | SEND TO DB                                            |
| :----: | :----: | ------------------ | ----------------------------------------------------- |
| Create |  POST  | /api/auth/login    | {username(string) , password(string)                  |
| Create |  POST  | /api/auth/register | {username(string) , password(string), email(string) } |

### Recipe Schema

When you send .post or .put to create or edit a recipe, please make sure you are sending data to the database as structure below:

```js
{
"user_id": 1,
"recipe_name": "To Die For Blueberry Muffins",
"source": "Grandma's recipe",
"ingredients": "1 ½ cups all-purpose flour, ¾ cup white sugar, ½ teaspoon salt, 2 teaspoons baking powder, ⅓ cup vegetable oil, 1 egg, ⅓ cup milk, or more as needed, 1 cup fresh blueberries, ½ cup white sugar, ⅓ cup all-purpose flour, ¼ cup butter, cubed,1 ½ teaspoons ground cinnamon"
"category": "Bakery",
"instructions": "Step 1 Preheat oven to 400 degrees F (200 degrees C). Grease muffin cups or line with muffin liners. Step 2 Combine 1 1/2 cups flour, 3/4 cup sugar, salt and baking powder. Place vegetable oil into a 1 cup measuring cup; add the egg and add enough milk to reach the 1-cup mark. Mix this with flour mixture. Fold in blueberries. Fill muffin cups right to the top, and sprinkle with crumb topping mixture. Step 3 To Make Crumb Topping: Mix together 1/2 cup sugar, 1/3 cup flour, 1/4 cup butter, and 1 1/2 teaspoons cinnamon. Mix with fork, and sprinkle over muffins before baking. Step 4 Bake for 20 to 25 minutes in the preheated oven, or until done.
}
```

| Properties   | Schema                                                           |
| ------------ | ---------------------------------------------------------------- |
| recipe_name  | Required                                                         |
| source       | Not required, if you don't fill it in, database will return null |
| ingredients  | Required                                                         |
| category     | Required                                                         |
| instructions | Required                                                         |

### Recipes

|  CRUD  | METHOD | ROUTE                   | Description              |
| :----: | :----: | ----------------------- | ------------------------ |
|  Read  |  GET   | /api/recipes            | get all recipes          |
|  Read  |  GET   | /api/recipes/:recipe_id | get one recipe by its id |
| Create |  POST  | /api/recipes            | create new recipe        |
| Update |  PUT   | /api/recipes/:recipe_id | edit recipe information  |
| Delete | DELETE | /api/recipes/:recipe_id | delete recipe by id      |
