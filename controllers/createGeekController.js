'use strict';
const Geek = require("../models/Geek");
const Channel = require("../models/Channel");
const createGeekPost = (req, res) => {
    /*let channelColor = Channel.find({ });
    console.log(channelColor);*/
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

        /*let channel = new Channel({
            name: "kotlin",
            color: "#FFA500"
        });


        channel.save((err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });*/

        geek.save((err, result) => {
            if (err) throw err;
            //console.log(result);
            res.redirect('/');
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createGeekPost };