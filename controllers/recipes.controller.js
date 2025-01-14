const { collectrecipes } = require("../models/recipe.model");

exports.getRecipes = (req, res) => {
  const { ingredients } = req.query;

  collectrecipes(ingredients).then((recipes) => {
    res.status(200).send({ recipes: recipes });
  });
};
