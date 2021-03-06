var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE in index.handlebars devour button
app.use(methodOverride('_method'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);


// var path = require ('path');
// app.use(express.static(path.join(__dirname + '../public')));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});