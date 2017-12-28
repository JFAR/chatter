var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

var tweets = [];

var preHtml = "<html><head></head><body><title>Chatter</title><h1>Chatter</h1><a href=\"\/AddChatter\">Add Chat</a><ul>"
var postHtml = "</ul></body></html>"

/* Serve main webpage */
app.get("/", function(req, res) {
	var html = "";

	for(i = 0; i < tweets.length; i++) {
		html += "<li>" + tweets[i] + "</li>";
	}

	res.send(preHtml + html + postHtml);
});

app.get("/AddChatter", function(req, res) {
	var options = {
		root: __dirname
	};
	res.sendFile('index.html', options);
});

app.post("*", function(req, res){
	tweets.push(req.body.text);

	var html = "";

	for(i = 0; i < tweets.length; i++) {
		html += "<li>" + tweets[i] + "</li>";
	}
	res.redirect("/");
});

var port = 8080;
app.listen(port, function() {
	console.log("Listening on port " + port);
});