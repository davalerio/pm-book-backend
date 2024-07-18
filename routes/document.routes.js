const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db.js');

//List document
router.get('/document', (req, res) => {
  const query = 'SELECT * FROM document WHERE state = 1';
  mysqlConnection.query(query, (err, result, fields) => {
    if (err) {
      // If an error occurred, send a generic server failure
      console.log(`not successful ${err}`);
      // mysqlConnection.destroy();
    } else {
      // If successful, inform as such
      console.log(`Query was successful`);
      // Send json file to end user if using an API
      res.json(result);
      // destroy the connection thread
      // mysqlConnection.destroy();
    }
  });
});

module.exports = router;
