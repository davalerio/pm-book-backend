const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db');

// List request
router.get('/request', (req, res) => {
  const query = 'SELECT * FROM request WHERE state = 1';
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data);
    } else{
      console.log(err);
    }
  })
});

module.exports = router;