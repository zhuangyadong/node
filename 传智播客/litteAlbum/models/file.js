/**
 * Created by Admin on 2017/10/11.
 */
var fs = require("fs");

exports.getAllAlbums = function (callback) {
    fs.readdir("./uploads",function (err,files) {
        var allAlbums = [];

        if (err){
            callback("找不到文件夹",null)
        }
        console.log(files);
        (function iterator(i) {
            if(i == files.length){
                callback(null,allAlbums);
                return;
            };
            fs.stat("./uploads/"+files[i],function (err,stats) {
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i+1);
            })
        })(0);


    })
    // return ["小猫","小狗"]
}

//通过文件名得到所有图片

exports.getAllImagesByAlbumName = function (albumName,callback) {
    fs.readdir("./uploads/" + albumName,function (err,files) {
        if(err){
            callback("未找到文件",null);
            return;
        }
        var allImages = [];
        (function iterator(i) {
            if(i == files.length){
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            //查询所有文件
            fs.stat("./uploads/"+albumName+"/"+files[i],function (err,stats) {
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i+1);
            })
        })(0)
    })
}
