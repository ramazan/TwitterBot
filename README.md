# Twitter Bot
Simple Twitter Bot

# Installing

Clone repository  

In projects folder run bottom command .


```shell
npm install 
```

# Configuration

You need to change [Config.js](config.js) bottom parameter from Twitter for OAuth

```javascript
module.exports = {
        consumer_key:         '...',
        consumer_secret:      '...',
        access_token:         '...',
        access_token_secret:  '..',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}
 ```
For this keys go  [Twitter Application Management](https://apps.twitter.com/)

Login with your Twitter account and create app  

After creating app  click 'Keys and Access Tokens' section and get tokens 

![Token](https://i.imgur.com/XRBXt6X.png)
![Secret](https://i.imgur.com/tj65QYN.png)


# Sample Usage 


```javascript
var params = {
    q : 'Fenerbahçe',
    count : 2
}

T.get('search/tweets', params ,gotData);

function gotData(err,data,response){
    
    var tweets = data.statuses;

    tweets.forEach(function(element) {
        console.log(element.text);
    }, this);
}
```
##### This code searches and get last 2 tweets contains 'Fenerbahçe' keyword.
##### count parameter is specify how many tweets get from Twitter

![Sample](http://i.imgur.com/S7cqfptr.png)
