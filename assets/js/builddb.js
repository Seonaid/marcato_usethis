var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../database/usethis.db');

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "../database/usethis.db"
  }
});

knex.schema.createTable('users', function (table) {
	table.increments();
	table.string('name');
	table.uuid('uuid');
	table.string(salt, 60);
	table.string(password, 60);
	table.string(email, 254);
	table.timestamps();
});

console.log('From database: ' knex.select().table('books'));


db.close();
// lost some of the information contained in the schema.js file... but this is just for testing at this point anyway.