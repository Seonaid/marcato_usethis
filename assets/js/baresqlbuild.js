var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

db.serialize(function() {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name STRING NOT NULL, salt STRING NOT NULL, password STRING NOT NULL, email STRING NOT NULL);");
  db.run("INSERT INTO users (name, salt, password, email) VALUES ('Seonaid', 'ioiouhage', 'iuhba hgej ba', 'seonaidl@gmail.com');");

  db.run("SELECT * FROM users", function(err, data) {
      console.log(data);
  });

});


db.close();
