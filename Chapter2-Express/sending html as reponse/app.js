const express = require("express");
const adminRoutes = require("./routes/admin");
const shoupRoutes = require("./routes/shop");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(shoupRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
  res;
});

app.listen(3000);
