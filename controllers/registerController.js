'use strict';
const User = require("../models/User");
const jwt = require('jsonwebtoken');

const registerGet = (req, res) => {
    res.render('register');
};

const registerPost = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        const token = createToken(user._id, req);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

const createToken = (id, req) => {
    return jwt.sign({ id }, req.app.get("api_secret_key"), { expiresIn: 3 * 24 * 60 * 60 });
};

module.exports = { registerGet, registerPost };