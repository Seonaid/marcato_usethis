var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../database/usethis.db');

db.serialize(function() {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name STRING NOT NULL, salt STRING NOT NULL, password STRING NOT NULL, email STRING NOT NULL);");
  db.run("CREATE TABLE inventory(id INTEGER PRIMARY KEY, uid INTEGER NOT NULL, item_name STRING NOT NULL, entered DATETIME NOT NULL, expires_in INTEGER NOT NULL, expires_on DATETIME, category STRING, FOREIGN KEY (uid) REFERENCES users(id));");
  db.run("CREATE TABLE preferences(id INTEGER PRIMARY KEY, uid INTEGER NOT NULL, notification_time DATETIME, how_early INTEGER);");
  

});


db.close();
