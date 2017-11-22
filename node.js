/*<!-- node -->
var http = require('http');
var fs = require('fs');

//The index.html must be the same name as the opening page as this is our way into the app 
fs.readFile('index.html', function (err, html) 
{
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();  
    }).listen(80);
});
*/

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';

/*var port = process.env.PORT; // 2. Using process.env.PORT
  app.set('port', port);*/

app.use(express.static('/'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "builds/angularregistration/index.html");
});

router.get("/register",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/register.html");
});



router.get("/profile",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/profile.html");
});

router.get("/search",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/search.html");
});

router.get("/colab",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/colab.html");
});

router.get("/colabDetailed",function(req,res){
  res.sendFile(path + "builds/angularregistration/colabDetailed.html");
});

router.get("/projects",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/projects.html");
});

router.get("/nav",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/nav.html");
});

router.get("/MyColabs",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/MyColabs.html");
});

router.get("/detailed",function(req,res){
  res.sendFile(path + "builds/angularregistration/views/detailed.html");
});


app.use("/",router);



app.listen(80,function(){
  console.log("Live at Port 80");
});