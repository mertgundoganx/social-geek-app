'use strict';
const mongoose = require('mongoose');

const geekSchema = new mongoose.Schema({
    "title": { type: String, required: true, lowercase: true },
    "channel": { type: String, required: true, lowercase: true, },
    "description": { type: String, required: true, lowercase: true },
    "author": { type: String, required: true, lowercase: true },
    "createdAt": { type: Date, default: Date.now },
    "comments": [{ type: String, required: true, lowercase: true }],
    "likes": [{ type: String, required: true, lowercase: true }],
});

const geek = mongoose.model('geek', geekSchema);

module.exports = geek;