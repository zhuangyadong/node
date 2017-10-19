/**
 * Created by Admin on 2017/10/18.
 */
var express = require("express");
var app = express();
var db = require("./model/db.js");
var formidable = require("formidable");
var ObjectId = require("mongodb").ObjectID;

app.set("view engine","ejs");
//静态
app.use(express.static("./public"));
app.get("/",function (req,res) {
    res.render("index");
});

app.get("/du",function (req,res,next) {
    var page = parseInt(req.query.page);
    db.find("liuyanben",{},{"sort":{"shijian":-1},"pageamount":5,"page":page},function (err,result) {
        res.json({"result":result});
    })
})
//处理留言
app.post("/tijiao",function (req,res,next) {
    var form = new formidable.IncomingForm();
    
    form.parse(req,function (err,fields) {
        //写入数据库
        db.insertOne("liuyanben",{
            "xingming":fields.xingming,
            "liuyan":fields.liuyan,
            "shijian":new Date()
        },function (err, result) {
            if(err){
                res.send({"result":-1});
                return;
            }
            res.send({"result":1});

        })
    })
})

//删除
app.get("/shanchu",function (req,res,next) {
    //得到参数
    var id = req.query.id;
    db.deleteMany("liuyanben",{"_id":ObjectId(id)},function (err, result) {
        if(err){
            console.log("删除失败");
        }
        res.redirect("/");
    })
})

app.listen(3000);