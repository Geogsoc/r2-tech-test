const devData = require("./r2-tech-test/data/data.json");

const formattedIngredients = devData.map((recipe) => {
  return recipe.ingredients.map((ingredients) => {
    return [recipe.id, ingredients.name, ingredients.grams];
  });
});

console.log(formattedIngredients.flat());
