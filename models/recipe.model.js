const db = require("../db/index");

exports.collectrecipes = (ingredients) => {
  console.log("in the model");
  const queryValues = [];
  let querystr =
    "SELECT recipes.*, ARRAY_AGG (name || ' ' || grams ||'g') ingredients FROM recipes JOIN ingredients ON recipes.recipe_id = ingredients.recipe_id GROUP BY recipes.id;";

  // if (ingredients) {
  //   queryValues.push(category);
  //   queryStr += ` WHERE ingredients.name != $1`;
  // }
  return db.query(querystr, queryValues).then((result) => {
    // const allrecipes = result.rows;
    return result.rows;
  });
};
