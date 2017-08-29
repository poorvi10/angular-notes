var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// Model Schema
//var ModelSchema = new Schema ({
//	name : {
//		type: String
//	},
//});

// Model Schema
var ModelSchema = new Schema ({
	email : {
		type: String
	},
	password : {
		type: String
	}
});
module.exports = mongoose.model('Model', ModelSchema);
//module.exports = mongoose.model('Model', ModelSchema);