const express = require("express");
const adminRoutes = require("./routes/admin");
const shoupRoutes = require("./routes/shop");
const path = require("path");
const app = express();

app.use(adminRoutes);
app.use(shoupRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(3000);
