var express = require("express");
var app = express();

/* Serve main webpage */
app.get("*", function(req, res) {
	var options = {
		root: __dirname
	}
	res.sendFile('index.html', options);
});

var port = 8080;
app.listen(port, function() {
	console.log("Listening on port " + port);
});