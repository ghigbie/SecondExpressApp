var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>You are end the slashing zone!</h1>");
});

app.get("/speak/:animal/", function(req, res){
   res.send("<h1>stuff</h1>"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Yay!!!");
});