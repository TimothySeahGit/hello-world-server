const express = require("express");

//define middleware that happens before the response
const logger = (req, res, next) => {
  console.log("This will log any incoming requests");
  next();
};
module.exports = logger;
