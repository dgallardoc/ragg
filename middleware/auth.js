'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'secretclinica';

exports.ensureAuth = function(req,res,next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'No se puede autenticar'});
	}
	var token =req.headers.authorization.replace(/['"]+/g,'');
	try {
		var payload = jwt.deocde(token,secret);
		if(payload.exp<=moment().unix()){
			return res.status(401).send({message: 'Token ha expirado'});
		}
	} catch(ex) {

		console.log(ex);
		return res.status(404).send({message: 'unvalid token'});
	}
	req.user=payload;
	next();
};