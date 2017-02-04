var express = require('express');
var app = express();

var messenger = require('./messenger');

app.use('/messenger', messenger);

module.exports = app;