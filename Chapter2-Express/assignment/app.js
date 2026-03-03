const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>Hello user</h1>");
  console.log("inside the users route");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome</h1>");
  console.log("default");
});

app.listen(3000);
