

const express = require("express")
const app = express();

app.get("/", function(req, res)
{
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me on: ....@gmail.com");
});

app.get("/about", function(req, res){
    res.send("About me ....");
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
});