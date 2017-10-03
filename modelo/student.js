'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = Schema({
	idstd: Number,
	user: {type:Schema.ObjectId, ref: 'User'}
	course: {type:Schema.ObjectId, ref:'Course'}
});

module.exports = mongoose.model('Student',StudentSchema);
