// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
 
app.set('view engine','ejs');

app.use(express.static("public"));

var items = ["buy Food","Cook the food","Eat the food"];

app.get("/",function(request,response){
    
    var today = new Date();
    var currentday = today.getDay();
    var day ="";

   switch (currentday) {
    case 0:
        day = "SunDay";
        break;
    case 1:
        day = "Monday";
        break
    case 2:
        day = "TuesDay";
        break
    case 3:
        day = "WednesDay";
        break
    case 4:
        day = "ThrusDay";
    case 5:
        day = "FriDay";
        break;
    case 6:
        day = "SaturDay";
        break;
    default:
        console.log("Te error on case");
   }
    response.render("list",{kindOfDay: day,newitem:items});
});

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(request,response){
     var item = request.body.newItem;
    items.push(item);

    response.redirect("/");

});





app.listen(3000,function(){
    console.log("The server is running at the port 3000 successfully");
});