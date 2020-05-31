'use strict';

const express = require('express');
const bodyParser = require('body-parser');
require('./model/user/user.model');
require('./model/subject/subject');

const path = require('path');
const http = require('http');
const app = express();

const PORT = process.env.PORT || 9001;

let server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

const loginroute = require('./routes/login');
const userroute = require('./routes/user');


app.use('/', loginroute);
app.use('/', userroute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log("server started", PORT));
