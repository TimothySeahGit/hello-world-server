const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //respond to requests

  res.end("Allo");
});

router.get("/watermelon", (req, res) => {
  res.end("Thie is a watermelon");
});

router.post("/watermelon", (req, res) => {
  res.end("Thie is a watermelon");
});

module.exports = router;
