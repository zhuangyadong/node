/**
 * Created by Admin on 2017/10/13.
 */
var express = require("express");
var db = require("./model/db.js");
var app = express();

app.get("/",function (req,res) {

    db.insertOne("teacher",{
        "name":"小刚"
    },function (err,result) {
        if(err){
            console.log("插入失败");
            return;
        }
        res.send("插入成功");
    } )

});

app.get("/seek",function (req,res) {


    //错误的写法
    //获取page参数
    /*var page = parseInt(req.query.page);
    console.log(page);
    var a = [];

   db.find("student",{},function (err,result) {
       // console.log(result);
       for (var i = 10*page;i<10*(page+1);i++){
           a.push(result[i]);
       }
       res.send(a);
   })
    // res.send("查找成功");*/


    //正确的写法
    var page = parseInt(req.query.page);
    // db.find("student",{},{"pagemount":2,"page":5},function (err,result) {
    //     if(err){
    //         console.log(err);
    //     }
    //     res.send(result);
    //     console.log(result.length);
    // })


    db.find("student",{},{"pageamount":5,"page":page},function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);
        console.log(result.length);
    });


})


//删除
app.get("/shan",function(req,res){
    var age = parseInt(req.query.id);
    console.log(age)
    db.deleteMany("student",{"age":age},function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);
    });
});

//修改
app.get("/xiugai",function (req,res) {
    db.updateMany(
        "student",  //集合名字
        {"age":73},    //改什么
        {$set:{name:"装"}},
        function (err,result) {
            if(err){
                console.log(err);
            }
            res.send(result);
        }

    )
})

app.listen(3000);