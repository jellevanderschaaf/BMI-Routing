const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var height2 = height * height;

    var bmi = weight / height2;

    res.send("Your BMI is " + bmi);

});

app.listen(3000);