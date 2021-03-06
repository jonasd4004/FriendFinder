// DEPENDENCIES

var express = require("express");
var path = require("path");


// ESTABLISH THE EXPRESS APP

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/public"));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);