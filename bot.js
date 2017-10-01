console.log('Twitter bot is starting..');

var Twit = require('twit');  // reference twit module..

var configuration = require('./config'); // reference config.js file

console.log(configuration);

var T = new Twit(configuration);

