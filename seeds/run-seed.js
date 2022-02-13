const devData = require("../data/data.json");
const seed = require("./seed");
const db = require("../db/index");

const runSeed = () => {
  return seed(devData).then(() => db.end);
};

runSeed();
