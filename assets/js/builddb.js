var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "../database/usethis.db";
  }
});