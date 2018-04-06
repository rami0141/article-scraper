// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

//scrape articles from the New YorK Times
var scrape = function(callback) {

  var articlesArr = [];

  request("https://www.huffingtonpost.com/", function(error, response, html) {

      var $ = cheerio.load(html);


      $("h2.story-heading").each(function(i, element) {

          var result = {};

          // Add the text and href of every link, and save them as properties of the result object
          result.title = $(this).children("a").text();
          result.link = $(this).children("a").attr("href");

          if (result.title !== "" && result.link !== "") {
              articlesArr.push(result);
          }
      });
      callback(articlesArr);
  });

};

module.exports = scrape;

// $("#scrapeNewArticles").on("click", function() {
// 	//card where articles will be stored
// 	var myCol = $('<div class="col-sm-8 col-md-6 col-lg-4 pb-2"></div>');
// 	var myPanel = $('<div class="card"><h5 class="card-header">Featured</h5><div class="card-body"><p class="card-text">With supporting text below as a natural lead-in to additional content.</p><a href="#" class="btn btn-primary">Save</a><a href="#" class="btn btn-primary">Add A Note</a></div></div>');

// 	 myPanel.appendTo(myCol);
//      myCol.appendTo('#scrapedArticles');
// } 