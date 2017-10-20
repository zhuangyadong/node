/**
 * Created by Admin on 2017/10/18.
 */
var express = require("express");
var app = express();
var db = require("./model/db.js");
var formidable = require("formidable");

app.set("view engine","ejs");
//静态
app.use(express.static("./public"));
app.get("/",function (req,res) {
    res.render("index");
});
//处理留言
app.post("/tijiao",function (req,res,next) {
    var form = new formidable.IncomingForm();
    
    form.parse(req,function (err,fields) {
        //写入数据库
        db.insertOne("liuyanben",{
            "xingming":fields.xingming,
            "liuyan":fields.liuyan
        },function (err, result) {
            if(err){
                res.send({"result":-1});
                return;
            }
            res.send({"result":1});

        })
    })
})


app.listen(3000);