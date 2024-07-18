const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error(`Error al obtener conexión del pool: ${err.stack}`);
    return;
  }

  console.log(`Conexión exitosa al pool. ID de conexión: ${connection.threadId}`);

  // Realiza tus consultas aquí...
  connection.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  // Libera la conexión después de usarla
  connection.release();
});

module.exports = pool;

// const mysqlConnection = mysql.createConnection({
//   host: 'developer.perumoney.pe',
//   user: 'root',
//   password: 'root@D3v',
//   database: 'pm_homepage',
// });

// mysqlConnection.connect(function (err) {
//   if (err) {
//     console.log(err);
//     console.log(`connectionRequest Failed ${err.stack}`);
//     return;
//   } else {
//     console.log(
//       `DB connectionRequest Successful ${mysqlConnection.threadId}`.bgYellow
//     );
//   }
// });

// module.exports = mysqlConnection;
