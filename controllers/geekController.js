'use strict';
const Geek = require("../models/Geek");
const geekGet = (req, res) => {
    res.render('geek', { id: req.originalUrl.split('/')[2] });
};

module.exports = { geekGet };