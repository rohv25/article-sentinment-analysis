var Sentiment = require('sentiment');
var fs = require('fs');
var sentiment = new Sentiment();
console.log("Reading file...");
fs.readFile('./hw4-nodejs-rohv25/news.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err){
        throw err;
    } else {
        var result = sentiment.analyze(data);
        console.dir(result);    
    }
  });
// var result = sentiment.analyze('I think I am awesome.');
// console.dir(result);    
