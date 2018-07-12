const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(8000, function () { console.log("listening on port 8000") });
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)