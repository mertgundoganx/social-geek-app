'use strict';
const express = require('express');
const connectDb = require('./db');
const cookieParser = require('cookie-parser');
const indexRoute = require('./routes/indexRoute');
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const logoutRoute = require('./routes/logoutRoute');
const createGeekRoute = require('./routes/createGeekRoute');
const { checkUser, loadGeeks } = require('./middleware/authMiddleware');
require('dotenv/config');

const app = express();
const port = process.env.PORT;
const mongoURL = process.env.MONGO_URL;

connectDb(mongoURL);

app.set('view engine', 'ejs');
app.set("api_secret_key", require("./config").api_secret_key);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('*', checkUser);
app.use('/', loadGeeks);
app.use(indexRoute, loginRoute, registerRoute, logoutRoute, createGeekRoute);

app.listen(port, () => {
    console.log(`App running on port: ${port}.`);
});