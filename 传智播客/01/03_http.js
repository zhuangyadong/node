//这个案例简单讲解http模块
//引用模块
var http = require('http');

//创建一个服务器，回掉函数表示接收到请求之后的事情

var server =http.createServer(function(req,res){
	//req参数表示请求，res表示响应
	console.log('服务器收到请求'+req.url);
	res.end("完毕");

});
//监听端口
server.listen(3000,"127.0.0.1");