var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)