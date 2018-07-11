// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views/'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)