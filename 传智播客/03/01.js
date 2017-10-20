/**
 * Created by Admin on 2017/10/9.
 */
var express = require("express");
var app = express();

app.get("/",function (req,res) {
    res.send("你好");

});

app.get("/haha",function (req,res) {
    res.send("这是哈哈哈哈页面");

});

app.listen(3000);