var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// Model Schema
//var ModelSchema = new Schema ({
//	name : {
//		type: String
//	},
//});+

// Model Schema
var ModelSchema = new Schema ({
	firstname : {
        type: String
	},
	lastname : {
        type: String
	},
	email : {
		type: String
	},
	password : {
		type: String
	}
});
module.exports = mongoose.model('User', ModelSchema);