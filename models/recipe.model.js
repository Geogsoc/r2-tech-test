const db = require("../db/index");

// exports.collectrecipes = () => {
//   return db.query("SELECT * FROM recipes;").then((result) => {
//     console.log("in the model");
//     return result.rows;
//   });
// };

exports.collectrecipes = () => {
  console.log("in the model");
  return db
    .query(
      // "SELECT * FROM recipes, JOIN ingredients ON recipes.recipe_id = ingredients.recipe_id;"
      "SELECT * FROM ingredients;"
    )
    .then((result) => {
      console.log("in the model");
      return result.rows;
    });
};
