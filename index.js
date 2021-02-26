// use an existing node-module: the 'http-module' by using 'require'
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object)
    // This object has a property called "url" which holds the part of the url that comes after the domain name:
    //res.write(req.url); // adding now a bigger query made out of two parts, so thats why this first query is in commend
    res.end('<br>Hello World!');
}).listen(8080);