/**
 * Default configuration manager
 * Inject app and express reference
 */
module.exports = function(app,express) {
                
	// DEVELOPMENT
	app.configure('development', function() {
		require("./config.js")();
		require("./development.js")(app,express);
	});

	// TEST
	app.configure('test', function() {
		require("./config.js")();
		require("./test.js")(app,express);
	});

	// PRODUCTION
	app.configure('production', function() {
		require("./config.js")();
		require("./production.js")(app,express);
	});                

}