'use strict';
const { Router } = require('express');
const createGeekController = require('../controllers/createGeekController');

const router = Router();

router.post('/createGeek', createGeekController.createGeekPost);

module.exports = router;