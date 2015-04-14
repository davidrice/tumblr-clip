var config = require("config");
var tumblr = require("tumblr.js");

var tumblrConfig = {
  consumer_key: config.tumblr.consumer_key,
  consumer_secret: config.tumblr.consumer_secret,
  token: config.tumblr.token,
  token_secret: config.tumblr.token_secret
};

var client = tumblr.createClient(tumblrConfig);

module.exports = {
	uploadVideo: function(filename, callback) {
		var options = {
			data: filename
		};
		client.video(config.tumblr.blog, options, function(err,result) {
			if(err==null) {
				callback(null, result);
			}
			else {
				callback(err);
			}
		});
	}
}
