const { collectrecipes } = require("../models/recipe.model");

exports.getRecipes = (req, res) => {
  console.log("in the controller");
  collectrecipes().then((recipes) => {
    res.status(200).send({ recipes: recipes });
  });
};
