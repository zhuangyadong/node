var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req,res){
	//得到用户路径

	var pathname = url.parse(req.url).pathname;

	if(pathname == "/"){
		pathname = "index.html"
	}

	var extname = path.extname(pathname);

	console.log(extname);

	// fs.readFile("./static/mime.json",function(err,data){
	// 	var obj = JSON.parse(data);
	// 	res.end(obj);
	// })

	//读取这个文件
	fs.readFile("./static/"+pathname,function(err,data){
		//如果文件不存在
		if(err){
			fs.readFile("./static/404.html",function(err,data){
				// res.writeHead(404,{"Content-type:text/html;charset=UTF8"});
				res.end(data);
			})
			return;
		}
		var mime = getMime(extname);
		res.writeHead(200,{"Content-type":mime});
		res.end(data);
	})


}).listen(3000,"127.0.0.1");

function getMime(extname){
	switch(extname){
		case ".html" :
			return "text/html";
			break;
		case ".jpg" :
			return	"image/jpg";
			break;
		case ".css" :
			return "text/css";
			break;
	}
}