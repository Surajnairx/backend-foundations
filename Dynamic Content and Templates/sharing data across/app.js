const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});

app.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

app.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000);
