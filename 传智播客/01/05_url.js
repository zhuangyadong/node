/*
var http = require('http');
var url = require('url');
var server = http.createServer(function (req,res) {
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	var age = query.age;
	console.log("pathname=>"+pathname);
	console.log("query=>"+query);
	console.log("age=>"+age);

	res.end("完毕");
});

server.listen(3000,"127.0.0.1")*/

var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    //url.parse()第二个参数为true，query属性会生成一个对象，如果为false,则返回url对象上的query属性会是一个未解析，未解码的字符串，默认为false
    var query = url.parse(req.url,true).query;

    var name = query.name;
    var sex = query.sex;
    var age = query.age;
    console.log("patname:"+ pathname);
    console.log(query);
    console.log("age:"+age);
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    
    res.end("服务器收到请求\n" +name+sex+age);
});
server.listen(3000,"127.0.0.1");