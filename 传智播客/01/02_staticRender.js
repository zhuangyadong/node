/**
 * Created by Admin on 2017/9/28.
 */
//require表示引包
var http = require('http');
var fs = require('fs');

//创建服务器，参数是一个回掉函数，表示有请求进来，要做什么
var server = http.createServer(function (req,res) {
    if(req.url == "/fang"){
        fs.readFile("./test1.html",function (err,data) {
            //req表示请求，request；res表示响应，response
            //设置HTTP头部，状态码是200，文件类型是html，字符集是
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if(req.url == "/yuan"){
        fs.readFile("./test2.html",function (err,data) {
            //req表示请求，request；res表示响应，response
            //设置HTTP头部，状态码是200，文件类型是html，字符集是
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    }else {
        res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
        res.end("没有找到该页面");
    }


});
//运行服务器，监听3000端口（端口可以任改）
server.listen(3000,"127.0.0.1");
