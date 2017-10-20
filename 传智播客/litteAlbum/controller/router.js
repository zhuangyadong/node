/**
 * Created by Admin on 2017/10/10.
 */
var file = require("../models/file");
exports.showIndex = function (req,res,next) {

    file.getAllAlbums(function (err,allAlbums) {
        if (err){
            next();
            return;
        }
        res.render("index",{
            "albums":allAlbums
        })
    });


}
//相册页
exports.showAlbum = function (req,res,next) {
    //遍历相册中的所有图片
    var albumName = req.params.albumName;

    file.getAllImagesByAlbumName(albumName,function (err,imagesArray) {
        if(err){
            next();
            return;
        }
        res.render("albums",{
            "albumname" : albumName,
            "imgs" : imagesArray
        })
    })

    // res.render("albums",{
    //     "albumName" : albumName
    // })


}