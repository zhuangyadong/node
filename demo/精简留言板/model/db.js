/**
 * Created by Admin on 2017/10/13.
 */
//这个模块封装所有对数据库的常用操作
var MongoClient = require("mongodb").MongoClient;


//不管数据库什么操作，都要先连接数据库，所以我们可以把连接数据库封装成内部函数

function _connectDB(callback) {
    var url = "mongodb://127.0.0.1:27017/aaa";
    //连接数据库

    MongoClient.connect(url,function (err,db) {
        if(err){
            callback(err,null);
            return;
        }
        callback(err,db);
    })
}

//插入数据

exports.insertOne = function (collectionName,json,callback) {
    _connectDB(function (err,db) {
        db.collection(collectionName).insertOne(json,function (err,result) {
            callback(err,result);
            db.close();//关闭数据库
        })
    })
}

//查找数据，找到所有数据

exports.find = function(collectionName,json,C,D){
    var result = [];//结果数组
    if (arguments.length == 3) {
        //那么参数C就是callback，参数D没有传。
        var callback = C;
        var skipnumber = 0;
        //数目限制
        var limit = 0;
    } else if (arguments.length == 4) {
        var callback = D;
        var args = C;
        //应该省略的条数
        var skipnumber = args.pageamount * args.page || 0;
        //数目限制
        var limit = args.pageamount || 0;
        //排序方式
        var sort = args.sort || {};
    } else {
        throw new Error("find函数的参数个数，必须是3个，或者4个。");
        return;
    }
    //连接数据库查找所有

    _connectDB(function(err,db){

        var cursor = db.collection(collectionName).find(json).skip(skipnumber).limit(limit).sort(sort);
            cursor.each(function (err,doc) {
                if(err){
                    callback(err,null);
                    db.close();
                    return;
                }
                if(doc != null){
                    result.push(doc);
                }else {
                    callback(null,result);
                    db.close();
                }
            })
    })
}


//删除

exports.deleteMany = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        //删除
        db.collection(collectionName).deleteMany(
            json,
            function (err, results) {
                callback(err, results);
                db.close(); //关闭数据库
            }
        );
    });
}

//修改

exports.updateMany = function (collectionName, json1,json2, callback) {
    _connectDB(function (err,db) {
        db.collection(collectionName).updateMany(
            json1,
            json2,
            function (err,results) {
                callback(err,results);
                db.close();
            }
        )
    })
}