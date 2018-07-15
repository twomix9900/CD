const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.all("*", (req,res,next) => { res.sendFile(path.resolve("./public/dist/public/index.html")) });
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)
app.listen(8000, function () { console.log("listening on port 8000") });
