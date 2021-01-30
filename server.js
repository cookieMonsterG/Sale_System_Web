'use strict';//strict mode
const express = require("express");
const body = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(body.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.render("home");
})


app.get("/submitForm", function(req,res){
    res.render("submitForm");
})















app.post("genratePDF", function(req, res){

    

})

// Take any port number of your choice which 
// is not taken by any other process 
app.listen(3000, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT 3000")

})

