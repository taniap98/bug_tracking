// import express from "express";
// import path from "path";
const express = require("express");
const path = require("path")
const db = require("./models");
var app = express();
var router = express.Router();

app.use("/api", router);

router.use((req, res, next) => {
    next();
});



db.sequelize.sync().then((req) => {
    var port = 8080;
    app.listen(port);
    console.log("App is runing on port " + port);
});
