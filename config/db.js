const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
  host: 'server.perumoney.pe',
  user: 'developer',
  password: 'r00t@D3v',
  database: 'pm_homepage',
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
