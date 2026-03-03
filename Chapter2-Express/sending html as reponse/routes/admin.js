const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
const { runInContext } = require("vm");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "app-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
