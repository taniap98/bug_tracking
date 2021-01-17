const express = require("express");
const path = require("path")
const bodyParser = require('body-parser');
var router = require('./routes');
const cors = require("cors");
const db = require("./models");
const passport = require('passport');
const UserDB = require("./models").user;
const initPassport = require("./config/passport-config");
const session = require("express-session");

var app = express();

initPassport(
    passport,
    async (email) => {
      return await UserDB.findOne({ where: { email: email } });
    },
    async (id) => {
      return await UserDB.findOne({ where: { id: id } });
    }
);
app.use(
    session({
        secret: "secret",
        name: "cookieLogin",
        resave: false,
        saveUninitialized: false,
       
    })
);
app.use(passport.initialize());
app.use(passport.session());







app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through,
   
}));
app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

router.use((req, res, next) => {
   // next();
});


var port = 8080;
app.listen(port);
console.log("App is runing on port " + port);

