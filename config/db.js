const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(`connectionRequest Failed ${err.stack}`);
    return;
  } else {
    console.log(
      `DB connectionRequest Successful ${mysqlConnection.threadId}`.bgYellow
    );
  }
});

module.exports = mysqlConnection;
