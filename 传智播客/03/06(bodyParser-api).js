/**
 * Created by Admin on 2017/10/10.
 */
var express = require("express");

var bodyParser = require("body-parser");

var app = express();

//模板引擎

app.set("view engine","ejs");

//读取模板

app.get("/",function (req,res) {
    res.render("form2");
});

//bodyParser API

app.use(bodyParser.urlencoded({extended:false}));

app.post("/",function (req,res) {
    console.log(req.body);
});

app.listen(3000);