import { createConnection } from 'mysql';

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  port: 3306,
  database: 'badiste'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Mysql database");
});

module.exports = con;