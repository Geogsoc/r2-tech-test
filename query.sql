\c recipes

-- SELECT * FROM recipes;


-- SELECT * FROM ingredients;


-- SELECT recipes.recipe_id, recipes.imageUrl, recipes.instructions, ingredients.name, ingredients.grams FROM recipes JOIN ingredients ON recipes.recipe_id = ingredients.recipe_id;

SELECT recipes.*, ARRAY_AGG (name || ' ' || grams ||'g') ingredients
      FROM recipes
     LEFT JOIN ingredients ON recipes.recipe_id = ingredients.recipe_id 
      GROUP BY recipes.id
      HAVING 'oat milk'= ANY(ARRAY_AGG(ingredients.name))
      OR'flax'= ANY(ARRAY_AGG(ingredients.name));