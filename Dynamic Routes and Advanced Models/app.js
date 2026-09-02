const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); //for ejs template engine
app.set('views', 'views');  //this is the default folder name for views, so this line is optional
app.use(bodyParser.urlencoded({ extended: false }));    //this is a middleware that will parse the incoming request body and make it available in req.body
app.use(express.static(path.join(__dirname, 'public'))); //this is a middleware that will serve static files from the public folder

const adminRoutes = require('./routes/admin'); //this is a middleware that will handle all the routes that start with /admin
const shopRoutes = require('./routes/shop'); //this is a middleware that will handle all the routes that start with /shop
const errorController = require('./controllers/error'); //this is a middleware that will handle all the routes that are not handled by the above two middlewares


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);
