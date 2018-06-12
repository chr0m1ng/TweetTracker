const Twitter = require('twitter');
const request = require('request');
const config = require('./config/keys.js');
const lana = require('./config/telegram-config');
const followList = require('./config/follow-list');

const client = new Twitter(config);

client.stream('statuses/filter', {follow: followList.followListString},  function(stream) {
    stream.on('data', function(tweet) {
        let dev = followList.followListId.find(x => x.id == tweet.user.id);
        if(dev != undefined) {
            let message = `Tweet de ${dev.name}:\n${tweet.text}`;
            request.post(lana.endpoint, { json : { 'chatId' : lana.chatId, 'message' : message } }, (err, resp) => {
                if(err) {
                    console.log(err);
                }
            });
        }
    });
  
    stream.on('error', function(error) {
      console.log(error);
    });
});
