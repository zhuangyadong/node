var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	//不处理小图标

	if(req.url == "./favicon.ico"){
		return;
	}

	fs.readdir("./",function(err,files){
		//files是个数组，表示./这个文件夹中的所有东西
		//包括文件、文件夹

		var wenjianjia = [];

		(function iterator(i){
			if(i==files.length){
				console.log(wenjianjia);

				return;
			}

			fs.stat("./"+files[i],function(err,stats){
				if(stats.isDirectory()){
					wenjianjia.push(files[i]);
				}

				iterator(i+1);
			})
		})(0);
	})

	res.end();
})

server.listen(3000,"127.0.0.1")