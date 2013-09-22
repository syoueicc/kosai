var http = require('http');
 
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write("最喜欢蔡蔡了~mua~");
    res.end();
});
var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log('Listening at: http://localhost: '+ port );
});