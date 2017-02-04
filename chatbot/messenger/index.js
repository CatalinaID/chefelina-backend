var express = require('express');
var app = express();

var routes = require('./Controller');
app.use('/', routes);

module.exports = app;