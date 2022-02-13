const express = require("express");
const apiRouter = require("./routes/api");
const app = express();
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    res.status(500).send({ msg: "Internal server error" });
  }
});
module.exports = app;
