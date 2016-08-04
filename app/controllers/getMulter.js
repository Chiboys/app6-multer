"use strict";
var multer = require("multer");
var md5 = require("md5");
var url = process.cwd()+"/public/file";
//url:存储上传文件的地址
	var config = multer.diskStorage({
		destination:url,
		filename:function(req,file,cb){
			var fileFormat = (file.originalname).split(".");
			cb(null, file.fieldname + '-' + md5(file) + "." + fileFormat[fileFormat.length - 1]);
		}
	});
	var upload = multer({
		 storage:config
	});
module.exports = upload;