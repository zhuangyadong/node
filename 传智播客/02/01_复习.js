/**
 * Created by Admin on 2017/9/30.
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});

    res.end("成功");
    
}).listen(80,"127.0.0.1");