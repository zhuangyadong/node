/**
 * Created by Admin on 2017/10/10.
 */
var express = require("express");
var app = express();

app.set("view engine","jade");

app.get("/",function (req,res) {
    res.render("xixi");
})

app.listen(3000)