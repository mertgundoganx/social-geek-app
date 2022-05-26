'use strict';
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    "title": { type: String, required: true, lowercase: true },
    "channel": { type: String, required: true, lowercase: true, },
    "description": { type: String, required: true, lowercase: true },
    "author": { type: String, required: true, lowercase: true },
    "createdAt": { type: Date, default: Date.now },
    "comments": [{ type: String, required: true, lowercase: true }],
    "likes": [{ type: String, required: true, lowercase: true }],
});

postSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
}, { collection: 'users', timestamps: true });

const post = mongoose.model('post', postSchema);

module.exports = post;