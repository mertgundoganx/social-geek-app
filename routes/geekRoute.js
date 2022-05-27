'use strict';
const { Router } = require('express');
const geekController = require('../controllers/geekController');

const router = Router();

router.get('/geek/:geekId', geekController.geekGet);

module.exports = router;