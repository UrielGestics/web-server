const express = require("express");
const app = express();
var hbs = require("hbs");

app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");
//helpers
hbs.registerHelper('getanio', () => new Date().getFullYear())

hbs.registerPartials(__dirname + "/views/parciales", function(err) {});


app.get("/", function(req, res) {
    res.render('home');
});

app.get("/about", function(req, res) {
    res.render("about");
});


app.listen(8000);