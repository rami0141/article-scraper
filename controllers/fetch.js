
module.exports = function() {

router.get("/api/fetch", function(req, res) {

      // scrapes articles and saves unique ones to database
      articlesController.fetch(function(err, docs) {
          //lets user know if there were new articles or not
          if (!docs || docs.insertedCount === 0) {
              res.json({message: "No new articles today. Check back tomorrow!"});
          }
          else {
              res.json({message: "Added " + docs.insertedCount + " new articles!"});

          }
      });
  });
}