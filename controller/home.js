'use strict'

function home(req,res){
	res.status(200).send({
		message:'saludos pelu2'
	});
}
module.exports={
	home
};