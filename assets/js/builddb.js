var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../database/usethis.db');

db.run("INSERT INTO users (name, salt, password, email) VALUES ('Seonaid', 'ioiouhage', 'iuhba hgej ba', 'seonaidl@gmail.com');")
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','celery', 'now', '259200', 'veg');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','carrots', 'now', '86400', 'veg');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','tofu', 'now', '86400', 'protein');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','salad greens', 'now', '518400', 'veg');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','milk', 'now', '259200', 'dairy');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','chicken', 'now', '259200', 'meat');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','oranges', 'now', '0', 'fruit');");
db.run("INSERT INTO inventory (uid, item_name, entered, expires_at, category) VALUES ('1','green beans', 'now', '-86400', 'veg');");


db.each("SELECT rowid AS id, name FROM users", function(err, row){
	console.log(row.id + ": " + row.name);
});

db.close();
// lost some of the information contained in the schema.js file... but this is just for testing at this point anyway.
