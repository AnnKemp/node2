// use an existing node-module: the 'http-module' by using 'require'
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object)
    // This object has a property called "url" which holds the part of the url that comes after the domain name:
    //res.write(req.url); // adding now a bigger query made out of two parts, so thats why this first query is in commend
    var q= url.parse(req.url, true).query;
    var txt= q.year + " "+ q.month; // je moet wél in de url ingeven: http://localhost:8080/?year=2021&month=February   want anders krijg je 'undefined' voor de maand en het jaar.
    res.write(txt);
    res.end('<br>Hello World!');
}).listen(8080);