const db = require("../db/index");

exports.collectrecipes = (ingredients) => {
  const queryValues = [];
  let querystr =
    "SELECT recipes.*, ARRAY_AGG (name || ' ' || grams ||'g') ingredients FROM recipes JOIN ingredients ON recipes.recipe_id = ingredients.recipe_id GROUP BY recipes.id";

  if (ingredients) {
    queryValues.push(ingredients);
    console.log(queryValues, "query value");
    queryStr += ` HAVING $1= ANY(ARRAY_AGG(ingredients.name));`;
  } else {
    querystr += ";";
  }

  return db.query(querystr, queryValues).then((result) => {
    return result.rows;
  });
};
