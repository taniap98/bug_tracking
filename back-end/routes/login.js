const express = require("express");
const router = express.Router();
const passport = require("passport");

const mpDB = require("../models").mp;

const controller = {
    checkAuth: async(req, res, next) => {
        if (req.isAuthenticated()) {
          return res.redirect("/api/alreadyAuth");
        }
        return next();
    },
    
    checkNotAuth: async(req, res, next) =>{
        if (req.isAuthenticated()) {
          return next();
        }
        res.redirect("/api/notAuth");
    },

    checkIfMP: async(req, res, next) => {
        try{
            const findMP = await mpDB.findOne({
                where: {
                    userId: req.session.passport.user
                }
            });
            if(!findMP){
                return res.redirect("/api/notAllowed");
            }
            return next();
        } catch(err){
            //return res.redirect("/api/notAllowed");
            console.log("err");
        }
    }
}

router.get("/success", async (req, res) => {
    console.log("Login successfully");
    res.status(200).send({logedInUser: req.session.passport.user});
});
  
router.get("/fail", async (req, res) => {
    res
        .status(401)
        .send({ message: "Email & Password combination does not match." });
});

router.get("/notAllowed", async (req, res) => {
    res
        .status(401)
        .send({ message: "You don't have access." });
});



router.get("/notAuth", async (req, res) => {
    res
        .status(401)
        .send({ message: "You must authenticate to access this route." });
});

router.post(
    "/login",
    controller.checkAuth,
    passport.authenticate("local", {
        successRedirect: "/api/success",
        failureRedirect: "/api/fail",
    })
);

router.delete("/logout", async (req, res) => {
    req.logOut();
    res.redirect("/api/logout");
});


module.exports = {
    router,
    controller
}