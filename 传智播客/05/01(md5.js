/**
 * Created by Admin on 2017/10/20.
 */
var crypto = require("crypto");


function md5(mingma) {
    var md5 = crypto.createHash("md5");
    var password = md5.update(mingma).digest("base64");
    return password;
}


console.log(md5(md5("123")))