var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use("/assets", express.static(__dirname + '/assets'));

app.use('/', express.static(__dirname + '/public'));

http.listen(8080, function(){
	console.log('listening on *:8080');
});