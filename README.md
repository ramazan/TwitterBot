# Twitter Bot
Simple Twitter Bot


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

![alt text](http://i.imgur.com/S7cqfptr.png)
