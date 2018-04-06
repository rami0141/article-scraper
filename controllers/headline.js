var headlineM = require("../models/Headline.js");

module.exports = function() {

  router.get("/", function(req, res) {
      Article.find({saved: false}, function(error, found) {
          if (error) {
              console.log(error);
          } else if (found.length === 0) {
              res.render("empty")
          } else {

            var hbsObject = {
                articles: found
            };
            res.render("index", hbsObject);

          }
      });
  });
}