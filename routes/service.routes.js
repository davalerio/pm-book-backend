const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db');

//Service'
router.get('/service', (req, res) => {
  const query = 'SELECT * FROM service WHERE state = 1';
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data);
    } else{
      console.log(err);
    }
  })
});

module.exports = router;