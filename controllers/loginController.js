'use strict';
const User = require("../models/User");
const jwt = require('jsonwebtoken');

const loginGet = (req, res) => {
    res.render('login');
};

const loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password);
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

module.exports = { loginGet, loginPost };