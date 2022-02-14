const db = require("../db/index");
const format = require("pg-format");

const seed = (data) => {
  return db
    .query(`DROP TABLE IF EXISTS recipes CASCADE;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS ingredients CASCADE;`);
    })
    .then(() => {
      return db.query(
        `CREATE TABLE recipes(id SERIAL PRIMARY KEY, recipe_id VARCHAR(50) UNIQUE, imageUrl TEXT, instructions TEXT NOT NULL);`
      );
    })
    .then(() => {
      return db.query(
        `CREATE TABLE ingredients(ingredient_id SERIAL PRIMARY KEY, recipe_id VARCHAR(50) REFERENCES recipes(recipe_id) NOT NULL, name TEXT NOT NULL, grams INT);`
      );
    })
    .then(() => {
      const formattedInstructions = data.map((recipe) => {
        return [recipe.id, recipe.imageUrl, recipe.instructions];
      });

      const querystr = format(
        `INSERT INTO recipes(recipe_id, imageUrl, instructions) VALUES %L RETURNING*;`,
        formattedInstructions
      );

      return db.query(querystr);
    })
    .then(() => {
      const formattedIngredients = data.map((recipe) => {
        return recipe.ingredients.map((ingredients) => {
          return [recipe.id, ingredients.name, ingredients.grams];
        });
      });
      const querystr1 = format(
        `INSERT INTO ingredients(recipe_id, name, grams) VALUES %L RETURNING*;`,
        formattedIngredients.flat()
      );
      return db.query(querystr1);
    });
};

//

//

//
// const seed = (data) => {
//   return db
//     .query(`DROP TABLE IF EXISTS recipes;`)
//     .then(() => {
//       return db.query(
//         `CREATE TABLE recipes(recipe_id VARCHAR(50) PRIMARY KEY, imageUrl TEXT, instructions TEXT NOT NULL, ingredients JSONB);`
//       );
//     })
//     .then(() => {
//       const formattedInstructions = data.map((recipe) => {
//         return [recipe.id, recipe.imageUrl, recipe.instructions];
//       });

//       const querystr = format(
//         `INSERT INTO recipes(recipe_id, imageUrl, instructions) VALUES %L RETURNING*;`,
//         formattedInstructions
//       );
//       // console.log(formattedInstructions);
//       return db.query(querystr);
//     })

// };

module.exports = seed;
