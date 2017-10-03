'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app =express();

//routes loading
var home_route = require('./routes/home');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Http headers

//base routes
app.use('/',home_route);

module.exports =app;
