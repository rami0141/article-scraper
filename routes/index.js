//Dependencies
const express = require('express');
const router = express.Router();
const db = require("../models");
var path = require("path");
//get route to root, populating index.handlebars with articles
// router.get('/art', (req,res) => {
//   db.Article
//     .find({})
//     .then(articles => res.render('index', {articles}))
//     .catch(err=> res.json(err));
// });

module.exports = function(app) {
 // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
};