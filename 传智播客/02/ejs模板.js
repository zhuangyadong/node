/**
 * Created by Admin on 2017/10/9.
 */
var ejs = require("ejs");

//模板
var string = "好高兴啊，今天我买了iphone<%= a %>S";

//数据
var data = {
    a:6
};
//数据绑定

var html = ejs.render(string,data);

console.log(html);