const express = require("express");
const app = express();
const index = require("./routes/index");
const logger = require("./logger");

//middleware. you can put logger in here to make it fire for everything from this point onwards. Or, you could put it in the individual get request.
app.use("/about", logger);
app.use("/watermelon", index);

app.get("/about", (req, res) => {
  res.send("about me!");
});

module.exports = app;
