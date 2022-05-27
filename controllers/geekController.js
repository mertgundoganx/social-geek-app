'use strict';
const Geek = require("../models/Geek");
const geekGet = (req, res) => {
    
    res.render('geek');
};

module.exports = { geekGet };