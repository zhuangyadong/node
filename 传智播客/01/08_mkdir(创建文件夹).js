var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	//不处理小图标

	if(req.url=="/favicon.ico"){
		return;
	}

	fs.mkdir("./test");
});

server.listen(3000,"127.0.0.1");