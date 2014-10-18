var express = require('express');
var session = require('cookie-session');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http').Server(app);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use("/assets", express.static(__dirname + '/assets'));

app.use('/', express.static(__dirname + '/public'));

// process the login form
app.post('/login', function(req, res){
  
});

// process the addinventory form
app.post('/add-inventory', function(req, res){
  
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});