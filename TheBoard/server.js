'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Moo');
});

http.createServer(app).listen(port);