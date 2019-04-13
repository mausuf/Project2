// Pull in required dependencies
var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ScorpioSQL",
    database: "exampledb"
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("ERROR: MySQL connection error -- " + err.stack + "\n\n");
    return;
  }
  console.log("testtesttest");
});

// Export connection for ORM use
module.exports = connection;
