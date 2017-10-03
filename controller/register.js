'use strict'
var bcrypt = require('bcrypt-nodejs');
var User =require('../modelo/user');

function SaveRegister(req,res){
	var user= new User();
	var params =req.body;

	user.name= params.name;
	user.lname= params.lname;
	user.email= params.email;
	user.role= 'USER_ROLE';
	user.image= 'null';

	if (params.password) {
		bcrypt.hash(params.password,null,null,function(err,hash){
			user.password= hash;
			if (user.name!=null && user.lname!=null && user.email!=null) {
				user.save((err,userStored)=>{
					if (err) {
						res.status(500).send({message:'Error'});
					}
					else{
						if (!userStored) {
							res.status(404).send({message:'no se registro'});
						}
						else{
							res.status(200).send({user:userStored});
						}
					}
				});
			}
			else{
				res.status(500).send({message:'Registro incompleto, rellenalos prro.'});
			}
		});
	}
	else{
		res.status(500).send({message:'introduce la contraseña'});
	}
}


module.exports={
	SaveRegister
};