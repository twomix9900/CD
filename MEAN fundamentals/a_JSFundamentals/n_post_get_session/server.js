// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route. 
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// route to process new user form data:
app.post('/users', function (req, res){
  console.log("POST DATA \n\n", req.body)
  //code to add user to db goes here!
  // redirect the user back to the root route.  
  res.redirect('/')
});


//      users/:id    //where :id is the id of a particular user.  HTTP method is GET
app.get("/users/:id", function (req, res){
  console.log("The user id requested is:", req.params.id);
  // just to illustrate that req.params is usable here:
  res.send("You requested the user with id: " + req.params.id);
  // code to get user from db goes here, etc...
});



// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.post('/users', function (req, res){
  // set the name property of session.  
  req.session.name = req.body.name;
  console.log(req.session.name);
  //code to add user to db goes here!
  // redirect the user back to the root route. 
  res.redirect('/');
});