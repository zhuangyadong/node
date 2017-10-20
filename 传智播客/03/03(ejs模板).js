/**
 * Created by Admin on 2017/10/10.
 */
var express = require("express");
var app = express();
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("haha",{
        "news":["腾讯新闻","新浪新闻","百度新闻","网易新闻"]
    })
})

app.listen(3000);