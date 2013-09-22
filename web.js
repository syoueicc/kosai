var fs = require('fs')
    , http = require('http');
 
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write("HELLO WORLD");
    res.end();
}).listen(808, function() {
    console.log('Listening at: http://localhost:80');
});