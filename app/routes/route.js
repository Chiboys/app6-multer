"use strict";
module.exports = function(app){
	var multer = require(process.cwd()+"/app/controllers/getMulter");
	app.post("/upload",multer.single('avatar'),function(req,res){
		
		if(req.file){
			var json = {
				"result": "upload successful !!!",
				"size": req.file.size	+ "bytes"
			};
			
		}else{
			var json = {
				"result": "upload failed !!!"
			};
		}
		res.json(json);
	});
	app.get("/",function(req,res){
		res.sendFile(process.cwd()+"/public/index.html");
	})
}