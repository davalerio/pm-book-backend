const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db');
const { validateHeaderName } = require('http');

// List province
router.get('/ubprovince', (req, res) => {
  const query = 'SELECT * FROM ub_province';
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data);
    } else{
      console.log(err);
    }
  })
});

//By ID
router.get('/ubprovince/:id', (req, res)=> {
  const { id } = req.params;
  const query = `SELECT * FROM ub_province WHERE department_id = '${id}'`;
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data)
    } else{ 
      console.log(err);
    }
  })
});

module.exports = router;