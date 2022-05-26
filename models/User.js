'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    "nickname": { type: String, required: true, unique: true, lowercase: true },
    "email": { type: String, required: true, unique: true, lowercase: true, validate:[isEmail, 'Please enter a valid email'] },
    "password": { type: String, required: true, minlength: 6 },
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
}, { collection: 'users', timestamps: true });

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };

const user = mongoose.model('user', userSchema);

module.exports = user;