/**
 * Created by Danny on 2015/9/20 15:35.
 */
var http = require("http");
var formidable = require('formidable');
var util = require("util");
var fs = require('fs');
var sd = require("silly-datetime");
var path = require("path");


//创建服务器
var server = http.createServer(function(req,res){
    //如果你的访问地址是这个，并且请求类型是post
    if(req.url == "/dopost" && req.method.toLowerCase() == "post"){
        //Creates a new incoming form.
        var form = new formidable.IncomingForm();
        //设置文件上传存放地址
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function(err, fields, files) {

            //时间，使用第三方模块，silly-datatime
            var tt = sd.format(new Date(),"YYYYMMDDHHmmss");
            //随机数
            var ran = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.touxiang.name);

            //执行改名
            var oldpath = __dirname + "/" + files.touxiang.path;

            //新的名称由三个部分组成：时间戳、随机数、拓展名

            var newpath = __dirname + "/uploads/" + tt + ran + extname;

            //改名
            fs.rename(oldpath,newpath,function (err) {
                if(err){
                   res.end("改名失败");
                }
                res.writeHead(200,{"content-type":"text/plain;charset=UTF8"});
                res.end("成功");
            })
        });
    }
});

server.listen(80,"127.0.0.1");