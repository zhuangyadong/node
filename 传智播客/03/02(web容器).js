/**
 * Created by Admin on 2017/10/10.
 */
var express = require("express");
var app = express();

app.use(express.static("./public"));

app.listen(3000);