/**
 * Created by Admin on 2017/10/10.
 */
var express = require("express");

var app = express();

//设置模板引擎
app.set("view engine","ejs");

app.get("/",function (req,res) {
    //读取模板
    res.render("form");
});

app.post("/",function (req,res) {
    //将数据添加到数据库

    res.send("成功");
});

app.listen(3000);