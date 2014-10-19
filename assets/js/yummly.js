
var express = require('express');
var app = express();
var fs = require('fs');
var url = require('url');
var content = './recipes.json';


var parse = fs.readFile(content, function read(err, data) {
    if (err) {
        throw err;
    }

    var recipes = JSON.parse(data); // <=== Note I'm using `data`, not `content`; we don't need a `content` variable anymore
	
	for (i = 0; i < recipes.matches.length; i++) {
		console.log(recipes.matches[i].recipeName + " has " + recipes.matches[i].ingredients.length + " ingredients.");
	}

   
});

module.exports.parse = parse;