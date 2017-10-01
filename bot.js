console.log('Twitter bot is starting..\n');

var Twit = require('twit');  // reference twit module..

var configuration = require('./config'); // reference config.js file

var T = new Twit(configuration);

var params = {
    q : 'Fenerbahçe',
    count : 5
}

T.get('search/tweets', params ,gotData);

function gotData(err,data,response){
    
    var tweets = data.statuses;

    tweets.forEach(function(element) {
        console.log(element.text);
    }, this);
}