var express = require("express");
var route = require("./app/routes/route.js");
var app = express();
app.use("app",express.static(process.cwd()+"/app"));
route(app);
app.listen(process.PORT || 3000,function(){
	console.log("listen to the port");
});