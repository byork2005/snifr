var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT;
var db = require("./models");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

