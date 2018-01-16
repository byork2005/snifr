var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var Strategy = require('passport-local').Strategy;

var port = process.env.PORT;
var db = require("./models");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

passport.use(new Strategy(
  function(username, password, cb) {
    db.User.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  console.log("ser user")
  console.log(user.id);
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  console.log("des prob")
  console.log(id);
  db.User.findById(id).then(function(user){
    if(user){
      console.log("found")
      cb(null, user.get());
    } else {
      cb(user.errors, null);
    }
  });
});

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers");
app.use("/", routes);

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT: " + port);
  });
});

