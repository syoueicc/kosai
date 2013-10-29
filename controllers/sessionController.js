module.exports = function(req, res, next) {
	//console.log(req.body.username + '---' + req.body.password);
	var  user = req.body.username
		,pass = req.body.password;

	return res.render("app/session",{name : user, pass : pass});
	
}