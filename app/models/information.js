//var mongoose = require('mongoose');
//
//module.exports = mongoose.model('Information', {
//    name: { type: String,index: true },
//    designation:{ type: String,index: true}
//	//done : Boolean
//});

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var InfromationSchema   = new Schema({
    name: { type: String,index: true },
    designation:{ type: String,index: true},
    department:{ type: String,index: true}
});

module.exports = mongoose.model('Information', InfromationSchema);