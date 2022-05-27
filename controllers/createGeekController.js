'use strict';
const Geek = require("../models/Geek");
const Channel = require("../models/Channel");
const createGeekPost = (req, res) => {

    try {
        let geek = new Geek({
            title: req.body.title,
            channel: req.body.channel,
            description: req.body.description,
            author: res.locals.user.nickname,
            createdAt: new Date(),
            comments: [],
            likes: [],
        });

        geek.save((err, result) => {
            if (err) throw err;
            res.redirect('/');
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createGeekPost };