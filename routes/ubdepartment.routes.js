const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db');

//List department
router.get('/ubdepartment', (req, res) => {
  const query = 'SELECT * FROM ub_department';
  mysqlConnection.query(query, (err, data)=> {
    if(!err){
      res.json(data);
    } else{
      console.log(err);
    }
  })
});

module.exports = router;