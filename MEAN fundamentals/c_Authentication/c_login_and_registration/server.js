var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const flash = require('express-flash');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'ultradanksecretstuff',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


const server = app.listen(8000, function () { console.log("listening on port 8000") });
app.use(flash());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_and_registration');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "An email is required"],
    minlength: [3, "Email must be at least 3 characters long"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email address'],
    unique: true,
  },
  first_name: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name must be at least 3 characters long"]
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name must be at least 3 characters long"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password name must be at least 6 characters long"]
  },
  birthday: {
    type: Date,
    required: [true, "Birthday is required"]
  }
})
UserSchema.plugin(uniqueValidator, { message: 'This {PATH} is already in use' });
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};
mongoose.model('User', UserSchema); 
const User = mongoose.model('User')
UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {  
  res.render("index", {
    messages: req.flash(),
  })
})

app.post('/register/', function (req, res) {
  if (req.body.password != req.body.password_confirm) {
    req.flash('password', 'Passwords must be matching');
    res.redirect('/');
    return false;
  }

  var user = new User({ first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, birthday: req.body.birthday })
  user.save(function(err) {
    if (err) {
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message)
      }
      res.redirect('/');
      return false;
    } else {
      req.session.id = user._id;
      req.session.email = user.email;
      res.redirect('/success');
      return false;
    }
  })
})

app.get('/success/', function (req, res) {
  res.render("success")
})

app.post('/login/', function (req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (user !== null) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          req.session.id = user._id;
          req.session.email = user.email;
          res.redirect('/success/');
          return false;
        } else {
          req.flash('login', 'Invalid credentials');
          res.redirect('/');
          return false;
        }
      });
    } else {
      req.flash('login', 'Invalid credentials');
      res.redirect('/');
      return false;
    }
  });
})