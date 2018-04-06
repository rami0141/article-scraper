const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require('request');
const logger = require("morgan");

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

const exphbs  = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions

// Require routes file pass router object
require("./config/routes")(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/hackernews", 
{
  // useMongoClient: true
});

require("./routes/index.js")(app);
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
