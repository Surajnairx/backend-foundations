const express = require("express");
const adminRoutes = require("./routes/admin");
const shoupRoutes = require("./routes/shop");
const app = express();

app.use(adminRoutes);
app.use(shoupRoutes);

app.listen(3000);
