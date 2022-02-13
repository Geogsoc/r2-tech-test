const apiRouter = require("express").Router();
const { getRecipes } = require("../controllers/recipes.controller");

apiRouter.get("/", (_, res) => {
  res.json({ message: "ok" });
});

apiRouter.get("/recipes", getRecipes);

module.exports = apiRouter;
