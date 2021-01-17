const express = require("express");
const router = express.Router();
const passport = require("passport");

const mpDB = require("../models").mp;
const bugDB = require("../models").bug;
const tstDB = require("../models").tst;
const userDB = require("../models").user;
const bcrypt = require("bcrypt");

const controller = {
    checkAuth: async(req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect("/api/alreadyAuth");
        }
        return next();
    },
    
    checkNotAuth: async(req, res, next) =>{
        if (req.headers.authorization) {
          return next();
        }
        res.redirect("/api/notAuth");
    },

    checkIfMPOnThisProject: async(req, res, next) => {
        try{
            
            const bug = await bugDB.findOne({
                where: {
                    id: req.params.id
                }
            });
            
            const findMP = await mpDB.findOne({
                where: {
                    
                    userId: req.session.passport.user,
                    projectId: bug.projectId
                }
            });
            if(!findMP){
                return res.redirect("/api/notAllowed");
            }
            return next();
        } catch(err){
            res.status(500).send({message: err});
            console.log("err");
        }
    },
    checkIfMP: async(req, res, next) => {
        try{
            const findMP = await mpDB.findOne({
                where: {
                    userId: req.body.userId
                }
            });
            if(!findMP){
                return res.redirect("/api/notAllowed");
            }
            return next();
        } catch(err){
            console.log("err");
        }
    },
    checkIfTSTOnThisProject: async(req, res, next) => {
        try{
            
            const tsts = await tstDB.findAll({
                where: {
                    userId: req.session.passport.user
                }
            })
            const projectIDs = [];

            for(tst in tsts){
                projectIDs.push(tsts[tst].dataValues.projectId);
            }
            if(!projectIDs.includes(req.body.projectId)){
                return res.redirect("/api/notAllowed");
            }
            return next();
        } catch(err){
            res.status(500).send({message: err});
            console.log("err");
        }
    },
}

router.get("/success", async (req, res) => {
    console.log("Login successfully");
    res.status(200).send({logedInUser: req.session.passport.user});
   
});
  
// router.get("/fail", async (req, res) => {
//     res
//         .status(401)
//         .send({ message: "Email & Password combination does not match." });
// });

router.get("/notAllowed", async (req, res) => {
    res
        
        .send({ message: "You don't have access." });
});



router.get("/notAuth", async (req, res) => {
    res
    
        .send({ message: "You must authenticate to access this route." });
});

router.get("/alreadyAuth", async (req, res) => {
    res
        .status(401)
        .send({ message: "You are already logged in." });
});

// router.post(
//     "/login",
//     controller.checkAuth,
//     passport.authenticate("local", {
//         successRedirect: "/api/success",
//         failureRedirect: "/api/fail",
//     })
// );

router.post(
    "/login", async (req, res) => {
        console.log(req.body);
        const {email, password} = req.body;
        try{
            const findUser = await userDB.findOne({
                where: {
                    email: email
                }
            })
            try {
               
                const isOk = await bcrypt.compare(password, findUser.password);
                if(isOk){
                    res.status(200).send({logedInUser: findUser.id, ok: true});
                } else {
                    res.send({message: "Password incorrect", ok: false});
                }
              } catch (err) {
                    res.send({message: "Password irimail invalid", ok: false});
            }
        
        }
        catch(err){
            res.send({message: "Email invalid", ok: false});
        }
    }
)

router.delete("/logout", async (req, res) => {
    req.logOut();
    res.status(200).send({message: "Logged out!"});
});


module.exports = {
    router,
    controller
}