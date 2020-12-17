const express = require("express");
const path = require("path")
const bodyParser = require('body-parser');
var router = require('./routes');
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

//app.use(flash());
app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

router.use((req, res, next) => {
    next();
});



//db.sequelize.sync().then((req) => {
    var port = 8080;
    app.listen(port);
    console.log("App is runing on port " + port);
//});
