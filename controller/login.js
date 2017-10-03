'use strict'

var bcrypt = require('bcrypt-nodejs');
var User =require('../modelo/user');
var jwt =require('../services/jwt');

function loginUser(req,res){
	var params = req.body;
	var email = params.email;
	var password = params.password;

	User.findOne({email: email.toLowerCase()},(err,user)=>{
		if (err) {
			res.status(500).send({message:'error'});
		}
		else{
			if (!user) {
				res.status(404).send({message:'usuario no existe'});
			}
			else{
				bcrypt.compare(password, user.password,function(err,check){
					if (check) {
						if (params.gethash) {
							res.status(200).send({
								token: jwt.createToken(user)
							});
						}
						else{
							res.status(200).send({user});
						}
					}
					else{
						res.status(404).send({message: ' no se puede logear'});
					}
				});
			}
		}
	});

}


module.exports={ loginUser};