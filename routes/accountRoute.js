'use strict';
const { Router } = require('express');
const accountController = require('../controllers/accountController');

const router = Router();

router.get('/account', accountController.accountGet);

module.exports = router;