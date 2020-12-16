const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")
const passport = require("passport");

router.post('/register', userController.addUser);
router.get('/users', checkNotAuth, userController.getAllUsers);
router.get('/user/:id', userController.getOneUser);
router.delete('/deleteuser/:id', userController.deleteOneUser);

router.get("/success", async (req, res) => {
    console.log("S-a apelat aici deci tre sa fie logat");
    res.status(200).send(req.session.id);
  });
  
  router.get("/fail", async (req, res) => {
    res
      .status(401)
      .send({ message: "Email & Password combination does not match." });
  });

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/api/alreadyAuth");
    }
    return next();
}

function checkNotAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/api/notAuth");
}

router.get("/notAuth", async (req, res) => {
    res
        .status(401)
        .send({ message: "You must authenticate to access this route." });
});
router.post(
    "/login",
    checkAuth,
    passport.authenticate("local", {
        successRedirect: "/api/success",
        failureRedirect: "/api/fail",
    })
);

router.delete("/logout", async (req, res) => {
    req.logOut();
    res.redirect("/api/logout");
});


module.exports = router;