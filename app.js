var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>You are end the slashing zone!</h1>");
});

app.get("/speak/:animal/", function(req, res){
    var animal = animal.toLowercase();
    var animalSay = "grrr.";
    switch(animal){
        case "pig":
            animalSay = "\"Oink!\"";
            break;
        case "cow":
            animalSay = "\"Moo!\"";
            break;
        case "dog":
            animalSay = "\"Woof!\"";
            break;
        case "cat":
            animalSay = "\"Meow!\"";
            break;
        default:
            animalSay = "nothing at all...";
    }
   res.send("<h1>The " + animal + " says" + animalSay + "</h1>"); 
});

app.get("/repeat/:somePhrase/:numberOfTimes", function(req, res){
    for(i = 0; i < numberOfTimes; i++){
        res.send("<h1>" + somePhrase + " </h1>");
    }
})

app.get("*", function(req, res){
    res.send("<h1>There are no animals to be found here! What are you doing with your life?</h1>");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Yay!!!");
});