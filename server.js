// === | External Modules | ===
const express = require("express");
// const methodOverride = require("method-override");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

// === | Internal Modules | ===
// const controllers = require("./controllers");

// === | Instanced Modules | ===
const app = express();

// === | Config | ===
app.set("view engine", "ejs");

// === | Middleware | ===
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/images"));

// === | Routes | ===
// - | Home | -
app.get("/", function(req, res){
    res.render("../index");
});

//  - | Local Testing Route | - 
// app.get("/", function(req, res){
//     res.render("../views/home");
// });
// === | Controllers | ===

// === | Listener | ===

// === | Local Testing Listener | ===
app.listen(3000, function(){
    console.log("Running on PORT 3000");
});