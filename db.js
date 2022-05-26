'use strict';
const mongoose = require('mongoose');

const connectDb = (connectionUrl) => {
    mongoose
        .connect(connectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to MongoDB.');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDb;