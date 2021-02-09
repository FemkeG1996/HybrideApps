const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('chinook.db');

let sql = `SELECT DISTINCT Name name FROM playlist
           ORDER BY name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

db.close();