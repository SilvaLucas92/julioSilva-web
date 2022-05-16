const express = require('express');
const router = express.Router();
const controller =  require('../controller/mainController');

router.get('/', controller.index);
router.get('/email-sent', controller.emailSent);
router.post('/send-email', controller.sendEmail);

module.exports = router;