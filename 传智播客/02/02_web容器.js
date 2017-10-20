/**
 * Created by Admin on 2017/9/30.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function (req,res) {
    //获取网址
    var pathname =url.parse(req.url).pathname;

    //判断此时用户输入的网址是文件夹地址还是文件地址
    //如果是文件夹地址，那么自动请求这个文件夹中的index.html

    if(pathname.indexOf(".")==-1){
        pathname += "/index.html";
    }

    var fileURL = "./" + path.normalize("./static/" + pathname);
    //得到拓展名
    var exthname = path.extname(pathname);

    //把文件读取出来
    fs.readFile(fileURL,function (err,data) {

        if(err){
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
            res.write("<h1>404，页面不存在</h1>")
        }
        //读完之后做的事情

        getMime(exthname,function (mime) {
            res.writeHead(200,{"Content-Type":mime})
            res.end(data);
        })

    })


}).listen(80,"127.0.0.1");

function getMime(extname,callback) {
    //读取mime.json文件，得到json，根据extname key，返回对应的value
    //读取文件
    fs.readFile("./mime.json",function (err,data) {
        if(err){
            throw Error("找不到mime.json文件");
            return;
        }
        //转成json
        var mimeJSON = JSON.parse(data);
        var mime = mimeJSON[extname] || "text/plain";

        //执行回掉函数，mime类型字符串，就是他的参数

        callback(mime);
    })
}