var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>You are end the slashing zone!</h1>");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var animalSay = "grrr.";
    var sounds = {
        pig: "\"Oink!\"",
        cow: "\"Moo!\"",
        dog: "\"Woof!\"",
        cat: "\"Meow!\"",
        elk: "\"errrr\"",
        unicorn: "\"No, do that slowly\"",
        goldfish: "..."
    }
    var sound = sounds[animal];
   res.send("<h1>The " + animal + " says " + sound + "</h1>"); 
});

app.get("/repeat/:somePhrase/:numberOfTimes", function(req, res){
    var somePhrase = req.params.somePhrase;
    var number = Number(req.params.numberOfTimes);
    var message = "";
    for(var i = 0; i <  number; i++){
       message += "<h1>" + somePhrase + " </h1>";
    }
    res.send(message);
});

app.get("*", function(req, res){
    res.send("<h1>There are no animals to be found here! What are you doing with your life?</h1>");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Yay!!!");
});