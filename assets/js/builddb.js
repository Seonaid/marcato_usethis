var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../database/usethis.db');

db.run("INSERT INTO users (name, salt, password, email) VALUES ('Seonaid', 'ioiouhage', 'iuhba hgej ba', 'seonaidl@gmail.com');")

db.each("SELECT rowid AS id, name FROM users", function(err, row){
	console.log(row.id + ": " + row.name);
});

db.close();
// lost some of the information contained in the schema.js file... but this is just for testing at this point anyway.