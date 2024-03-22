const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db');

// List district
router.get('/ubdistrict', (req, res) => {
  const query = 'SELECT * FROM ub_district';
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data);
    } else{
      console.log(err);
    }
  })
});

//By ID
router.get('/ubdistrict/:id', (req, res)=> {
  const { id } = req.params;
  const query = `SELECT * FROM ub_district WHERE province_id = '${id}'`;
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data)
    } else{ 
      console.log(err);
    }
  })
});

module.exports = router;