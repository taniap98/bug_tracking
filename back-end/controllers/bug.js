const BugDB = require("../models").bug;
const TstDB = require("../models").tst;
const ProjectDB = require("../models").project;
const MpDB = require("../models").mp;

const express = require("express");
const router = express.Router();


const controller = {
    addBug: async (req, res) => {
        const bug = {
            severity: req.body.severity,
            priority: req.body.priority,
            description: req.body.description,
            linkCommit: req.body.linkCommit,
            status: false,
            tstId: req.body.tstId,
            projectId: req.body.projectId
        }

        let err = true;

        try{
            const findTst = await TstDB.findOne({
                where: {
                    id: bug.tstId
                }
            })

            const findProject = await ProjectDB.findOne({
                where: {
                    id: bug.projectId
                }
            })

            if(!findTst || !findProject){
                res.status(400).send({
                    message: "TstId or ProjectId doesn't exist!"
            })
                err = false;
        }
        }catch(err){
                console.log(err);
        }

        if(!bug.description || !bug.linkCommit){
            res.status(400).send("all the fields should be completed");
            err = false;
        }

        // if(typeof bug.severity === 'string' || bug.severity instanceof String || typeof bug.priority === 'string' || bug.priority instanceof String){
        //     res.status(400).send("It must be a number between 1 and 5");
        //     err = false;
        // } 
        const sev = parseInt(bug.severity);
        const pri = parseInt(bug.priority);

       if(5 < sev  || sev < 1 ) {
            res.status(400).send("Severity out of bounds");
            err = false;
        }

        if(5 < pri  || pri < 1 ){
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
        let bugId = req.path.split('/')[3];
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
            let bugId = req.path.split('/')[3];
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

    updateStatus: async (req, res) => {
        try{
            const link = req.body.linkResolve;
            if(!link || !link.includes("https://")){
                res.send({message:"It requiers a link", ok:false});
                
            } else {
                let bugId = req.path.split('/')[3];
                const bug = await BugDB.findOne({
                    where: {
                        id: bugId
                    }
                })
                const bugDB = await BugDB.update(
                    {status: true,
                    linkResolve: link},
                    {where: { id: bugId } }
                    );
                res.status(200).send({
                    message: "Status for bug " + bugId + " updated.",
                    ok:true
                });
            }
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error updating bug!"
            })
        }
   },

   seeMyBugs: async (req, res) => {
    try{
        const mps = await MpDB.findAll({
            where: {
                userId: req.body.userId
            }
        })
        const projectIDs = [];
        for(mp in mps){
            projectIDs.push(mps[mp].dataValues.projectId);
        }
        const bugs = await BugDB.findAll({
            where: {
                projectId: req.body.projectId 
            }
        });
        res.status(200).send(bugs);
    } catch(error){
        console.log(error);
        res.send({
            message: "Error selecting all the bugs!"
        })
    }
   },

    

}

module.exports = controller;