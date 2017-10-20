/**
 * Created by Admin on 2017/10/10.
 */
var express = require("express");
var app = express();

app.get("/",function (req,res) {
    console.log(req.query);
    res.send();
});

app.listen(3000);