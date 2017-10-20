/**
 * Created by Admin on 2017/9/28.
 */
//require表示引包
var http = require('http');

//创建服务器，参数是一个回掉函数，表示有请求进来，要做什么
var server = http.createServer(function (req,res) {
    //req表示请求，request；res表示响应，response
    //设置HTTP头部，状态码是200，文件类型是html，字符集是
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("哈哈哈哈哈，我买了一个iphone"+(1+2+3+2)+'plus');
});
//运行服务器，监听3000端口（端口可以任改）
server.listen(3000,"127.0.0.1");
