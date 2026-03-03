const express = require("express");
const router = express.Router();
const path = require("path");
const { runInContext } = require("vm");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "app-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
