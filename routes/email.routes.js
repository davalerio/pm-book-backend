// const express = require('express');
// const router = express.Router();

import { Router } from 'express'
import { EmailController } from '../controllers/emailController.js'
const router = Router()

router.post('/', EmailController.sendEmail)

export default router

// const { Router } = require('express');
// const router = Router();

// let email = require('../controllers/email.controller');
// let emailPerumoney = require('../controllers/emailPerumoney.controller');
// let emailQullqui = require('../controllers/emailQullqui.controller');

// router.post('/sendemail', email.sendEmail);
// router.post('/emailPerumoney', emailPerumoney.sendEmail);
// router.post('/emailQullqui', emailQullqui.sendEmail);

// module.exports = router;
