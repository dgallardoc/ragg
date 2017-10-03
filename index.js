'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/newdb',(err,res)=>{
	if(err){
		throw err;
	}else{
		console.log("se ha conectado correctamente");
		app.listen(port,function(){
			console.log("servidor de api rest en puerto:"+port);
	});
	}
});
