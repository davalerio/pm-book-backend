// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const router = Router();

let email = require('../controllers/email.controller');
let emailPerumoney = require('../controllers/emailPerumoney.controller');
let emailQullqui = require('../controllers/emailQullqui.controller');

router.post('/sendemail', email.sendEmail);
router.post('/emailPerumoney', emailPerumoney.sendEmail);
router.post('/emailQullqui', emailQullqui.sendEmail);

module.exports = router;