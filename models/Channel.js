'use strict';
const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    "name": { type: String, lowercase: true },
    "color": { type: String, lowercase: true, }
});

const channel = mongoose.model('channel', channelSchema);

module.exports = channel;