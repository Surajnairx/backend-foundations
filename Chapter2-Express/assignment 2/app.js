const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/users");

app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.listen(3000);
