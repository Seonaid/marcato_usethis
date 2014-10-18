var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../database/usethis.db');
var userId = 1
var ingr = []
var i=0
  
  db.each("SELECT item_name FROM inventory WHERE expires_at <= 86400 ORDER BY expires_at", function(err, row) {
	    ingr[i] = row.item_name;
	    i ++;
 
      console.log('ingredients are ' + ingr);
  });

