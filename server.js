// TODO
// Build functionality
// Build Structure
// CSS
// Deploy on Heroku
// anything else?

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

// === | Routes | ===
// - | Home | -
app.get("/", function(req, res){
    res.render("../views/home");
});

// === | Controllers | ===

// === | Listener | ===

// === | Local Testing Listener | ===
app.listen(3000, function(){
    console.log("Running on PORT 3000");
});