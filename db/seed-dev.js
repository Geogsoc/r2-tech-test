const data = require("../data/data.json");
const seed = require("../../seeds/seed");

const db = require("./");

seed(data).then(() => {
  return db.end();
});
