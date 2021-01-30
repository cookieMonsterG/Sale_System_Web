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










app.post("/generatePDF", function(req, res){
    const PDFDocument = require('pdfkit');
    const fs = require('fs');

    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
    pdfDoc.text("My Sample PDF Document");
    pdfDoc.end();

    console.log(req.body.data);
})

// Take any port number of your choice which 
// is not taken by any other process 
app.listen(8080, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT 8080")

})

