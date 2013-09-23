var express = require('express')
	//, app = express()
	, _globle = require("./conf/GLOBLE")
	, path = __dirname
	, fs = require("fs")
	, ejs = require("ejs");


exports.boot = function(params) {
	//Create our express instance
	app = express();	

	// Import configuration
	//require(path + '/conf/configuration.js')(app,express);
  
	// Bootstrap application
	bootApplication(app);
	// bootModels(app);
	bootControllers(app);
  
	return app;
}

function bootApplication(app){
	// launch
	// app.use(express.logger({ format: ':method :url :status' }));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.session({ secret: 'kosai' }));
	app.use("/static", express.static(path + _globle._GLOBLE_ARGS.PUBLIC_DIR));  // Before router to enable dynamic routing
	app.use(function(req, res, next){
		res.locals.user = req.session.user;
		next();
	});
	app.use(app.router);

	// Setup ejs views as default, with .html as the extension
	app.set('views', path + '/views');
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

}

function bootControllers(app) {
  // fs.readdir(path + '/controllers', function(err, files){
  //   if (err) throw err;
  //   files.forEach(function(file){    	
  //   	bootController(app, file);    		
  //   });


  // });
 
  require(path + '/controllers/appController')(app);			// Include
  
}

if (!module.parent) {
  exports.boot().listen(_globle.port);
  console.log("Express server %s listening on port %d", express.version, _globle.port);
}