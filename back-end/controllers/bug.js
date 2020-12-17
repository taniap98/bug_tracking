const BugDB = require("../models").bug;

const express = require("express");
const router = express.Router();


const controller = {
    addBug: async (req, res) => {
        const bug = {
            severity: req.body.severity,
            priority: req.body.priority,
            description: req.body.description,
            linkCommit: req.body.linkCommit,
            status: req.body.status,
            linkResolve: req.body.linkResolve
        }

        let err = true;
        if(!bug.description || !bug.linkCommit || !bug.status){
            res.status(400).send("all the fields should be completed");
            err = false;
        }

        if(typeof bug.severity === 'string' || bug.severity instanceof String || typeof bug.priority === 'string' || bug.priority instanceof String){
            res.status(400).send("It must be a number between 1 and 5");
            err = false;
        } 

       if(5 < bug.severity  || bug.severity < 1 ) {
            res.status(400).send("Severity out of bounds");
            err = false;
        }

        if(5 < bug.priority  || bug.priority < 1 ){
            res.status(400).send("Priority out of bounds");
            err = false;
        }

        if(bug.linkCommit && !bug.linkCommit.includes("https://")){
            res.status(400).send("It requiers a link");
            err = false;
        }

        if(err){

            try{
                const bugDB = await BugDB.create(bug);
                res.status(200).send({
                    message: "Bug added."
                })
            } catch(error){
                console.log(error);
                res.status(500).send({
                    message: "Error creating new bug!"
                })
            }
        }
        
    },

    getBug: async(req, res) => {
        try{
            const bugs = await BugDB.findAll();
            res.status(200).send(bugs);
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting all the bugs!"
            })
        }

    },

    getOneBug: async(req, res) => {
        try{
        let bugId = req.path.split('/')[2];
        const bug = await BugDB.findOne({
            where: {
                id: bugId
            }
        })
        res.status(200).send(bug);
    } catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error selecting one bug!"
        })
    }
},

    deleteOneBug: async(req, res) => {
            try{
                let bugId = req.path.split('/')[2];
                const bug = await BugDB.destroy({
                    where: {
                        id: bugId
                    }
                })
                res.status(200).send({
                    message: "Bug " + bugId + " deleted."
                });
            } catch(error){
                console.log(error);
                res.status(500).send({
                    message: "Error deleting bug!"
                })
            }
    },

   

    

}

module.exports = controller;