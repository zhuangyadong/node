/**
 * Created by Admin on 2017/10/9.
 */
var http = require('http');
// var url = require("url");
var querystring = require('querystring');

//创建服务器

var server = http.createServer(function (req,res) {
    if(req.url == "/dopost" && req.method.toLowerCase() == "post"){

        var alldata = "";

        req.addListener("data",function (chunk) {
            alldata += chunk;
        });

        req.addListener("end",function () {
            var datastring = alldata.toString();
            // res.end("success");
            console.log("success");
            //将datastring转为一个对象

            var dataObj = querystring.parse(datastring);
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});

            res.end("您的姓名是："+dataObj.name+"、您的性别是："+dataObj.sex+"、您的爱好："+dataObj.hobby+"、您的头像是："+dataObj.touxiang);

        })
    }
});

server.listen(80,"127.0.0.1");