module.exports = function(req, res, next) {
	console.log(req.body.user + '---' + req.body.pass);
	res.render("test");
	
}