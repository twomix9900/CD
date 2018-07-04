var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get("/users", function (request, response) {
  var users_array = [{
      name: "Michael",
      email: "michael@codingdojo.com"
    },
    {
      name: "Jay",
      email: "jay@codingdojo.com"
    },
    {
      name: "Brendan",
      email: "brendan@codingdojo.com"
    },
    {
      name: "Andrew",
      email: "andrew@codingdojo.com"
    }
  ];
  response.render('userz', {
    usersss: users_array
  });
})

app.get("/cars", function (request, response) {
  response.render('cars');
})

app.get("/cats", function (request, response) {
  response.render('cats');
})

app.get("/cars/new", function (request, response) {
  response.render('form');
})

app.get("/cats/4", function (request, response) {
  var catDetails = [
    "cuddles", 'spaghetti', '3', 'under the bed'
  ];
  response.render('details', {
    cat: catDetails
  })
});

app.get("/cats/5", function (request, response) {
  var catDetails = [
    "muffin", 'pizza', '4', 'on you'
  ];
  response.render('details', {
    cat: catDetails
  })
});

app.get("/cats/6", function (request, response) {
  var catDetails = [
    "pancake", 'burger', '5', 'outside'
  ];
  response.render('details', {
    cat: catDetails
  })
});

app.get("/", function (request, response) {
  response.render('index');
})

app.listen(8000, function () {
  console.log("listening on port 8000");
})