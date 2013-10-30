/**
 * connect db
 */
var mongo = require('mongoskin');


var kosai = mongo.db('localhost:27017/kosai?auto_reconnect');

kosai.bind('user', {
	loginVerification : function(fn) {
		this.findOne(fn);
	}
});



module.exports = function(){
	kosai.user.loginVerification(function(error, result){
		return console.log(result.name);
	});
};