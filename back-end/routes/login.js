const express = require("express");
const router = express.Router();
const passport = require("passport");

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
    }
}

router.get("/success", async (req, res) => {
    console.log("Login successfully");
    res.status(200).send(req.session.id);
});
  
router.get("/fail", async (req, res) => {
    res
        .status(401)
        .send({ message: "Email & Password combination does not match." });
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