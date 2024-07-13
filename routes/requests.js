import { Router } from 'express'
import { RequestController } from '../controllers/requestsController.js'

const router = Router()

// Listar registros
router.get('/', RequestController.findAll)

export default router

// const express = require('express')
// const router = express.Router()
// const mysqlConnection = require('../config/db')

// // Listar registros
// router.get('/request', (req, res) => {
//   const query = 'SELECT * FROM request WHERE state = 1'
//   mysqlConnection.query(query, (err, data) => {
//     if (!err) {
//       res.json(data)
//     } else {
//       console.log(err)
//     }
//   })
// })

// module.exports = router
