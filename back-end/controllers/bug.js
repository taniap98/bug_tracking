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

}

module.exports = controller;