//这个案例简单讲解http模块
//引用模块
var http = require('http');

//创建一个服务器，回掉函数表示接收到请求之后的事情

var server =http.createServer(function(req,res){
	//req参数表示请求，res表示响应
	console.log('服务器收到请求'+req.url);
	//设置一个响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	res.write("<h1>我是和h1标签</h1>")
	res.end("<h1>完毕</h1>");

});
//监听端口
server.listen(3000,"127.0.0.1");


/*
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	console.log("请求中");
	res.end('服务器已启动');
}).listen(3000,'127.0.0.1');
*/