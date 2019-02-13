'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();
var controllers = require('./controllers');

app.set('view engine', 'vash');

app.use(express.static(__dirname + "/public"));

controllers.init(app);

http.createServer(app).listen(port);