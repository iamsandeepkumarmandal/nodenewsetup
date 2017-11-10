var express = require("express");
var app = express();

app.use('/assets', express.static(__dirname + '/assets'));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("pages/index");
});

app.get("/about",function(req,res){
    res.render("pages/about");
});

app.listen(8081);
console.log("Port 8081 is started");