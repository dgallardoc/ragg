'use strict'

var bcrypt = require('bcrypt-nodejs');
var User =require('../modelo/user');
var jwt =require('../services/jwt');

function updateUser(req,res){
	var userId= req.params.id;
	var update= req.params.body;

	User.findByIdAndUpdate(userId, update,(err,userUpdated)=>{
		if (err) {
			res.status(500).send({message: 'Error al actualizar el usuario'});
		}
		else {
			if(!userUpdated){
				res.status(404).send({message: 'no se ha podido actualizar el usuario'});
			}
			else{
				res.status(200).send({user: userUpdated});
			}
		}
	});
};
module.exports ={
	updateUser
};