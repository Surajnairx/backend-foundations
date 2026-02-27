const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("inside the server");
  res.send("<h1>Product Section</h1>");
});

app.use("/", (req, res, next) => {
  console.log("inside the server");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
