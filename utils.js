const devData = require("./data/data.json");

const formattedIngredients = devData.map((recipe) => {
  // const Ingredients = {};
  return recipe.ingredients.map((ingredients) => {
    // Ingredients[recipe.id]=ingredients.name
    return [recipe.id, ingredients.name, ingredients.grams];
  });
});

const editedIngredients = formattedIngredients.flat();

console.log(editedIngredients);

// const formattedIngredients = devData.map((recipe) => {

//   const ingredients={}
//   return recipe.ingredients.map((ingredients) => {
//     return [recipe.id, ingredients.name, ingredients.grams];
//   });
// });

// console.log(formattedIngredients.flat());
