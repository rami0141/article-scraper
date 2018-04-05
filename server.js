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
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
MONGOOSE.PROMISE = PROMISE;
MONGOOSE.CONNECT("MONGODB://LOCALHOST/WEEK18POPULATER", {
  USEMONGOCLIENT: TRUE
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
