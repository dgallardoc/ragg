'use strict'

var express=require('express');
var HomeController = require('../controller/home');
var RegisterController = require('../controller/register');
var LoginController = require('../controller/login');
var UpdateController = require('../controller/update');

//middlewares
var mdAuth = require('../middleware/auth');

var api = express.Router();

api.get('/home2',mdAuth.ensureAuth,HomeController.home);
api.post('/register',RegisterController.SaveRegister);
api.post('/login',LoginController.loginUser);
api.put('/configUser/:id',mdAuth.ensureAuth,UpdateController.updateUser);

module.exports=api;