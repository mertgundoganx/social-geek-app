'use strict';
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const Geek = require("../models/Geek");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, req.app.get("api_secret_key"), (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, req.app.get("api_secret_key"), async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

const loadGeeks = async (req, res, next) => {
    try {
        let geeks = await Geek.find({});
        res.locals.geeks = geeks;
        next();
    } catch (error) {
        console.log(error);
    }
};

const getGeek = async (req, res, next) => {
    let id = req.params.geekId;
    console.log(id);
    try {
        Geek.findById(id, (err, geek) => {
            if (err) throw err;
            res.locals.geek = geek;
            console.log(geek);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { requireAuth, checkUser, loadGeeks, getGeek };