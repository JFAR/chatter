var express = require("express");
var app = express();

/* Serve main webpage */
app.get("/", function(req, res) {
	res.sendFile('index.html');
});

var port = 8080;
app.listen(port, function() {
	console.log("Listening on port " + port);
});