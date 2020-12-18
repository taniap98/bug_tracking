const TstDB = require("../models").tst;
const UserDB = require("../models").user;
const ProjectDB = require("../models").project;

const express = require("express");
const router = express.Router();


const controller = {
    addTst: async(req, res) => {
        const tst = {
            userId: req.body.userId,
            projectId: req.body.projectId
        }

        let err = true;
        try{
            const findUser = await UserDB.findOne({
                where: {
                    id: tst.userId
                }
            })

            const findProject = await ProjectDB.findOne({
                where: {
                    id: tst.projectId
                }
            })

            if(!findUser || !findProject){
                res.status(400).send({
                    message: "UserId or ProjectId doesn't exist!"
            })
                err = false;
        }
        }catch(err){
                console.log(err);

        }
 
    if(err){
        try{
            const newTst = await TstDB.create(tst);
            res.status(200).send({
                message: "Tst added."
            })
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error creating new tst!"
            })
        }
    }},

    getAllTsts: async(req, res) => {
        try{
            const tst = await TstDB.findAll();
            res.status(200).send(tst);
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting all tsts!"
            })
        }
    },

    getOneTst: async(req, res) => {
        try{
            let tstId = req.path.split('/')[3];
            const tst = await TstDB.findOne({
                where: {
                    id: tstId
                }
            })
            res.status(200).send(tst);
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting one tst!"
            })
        }
    },
    
    deleteOneTst: async(req, res) => {
        try{
            let tstId = req.path.split('/')[3];
            const tst = await TstDB.destroy({
                where: {
                    id: tstId
                }
            })
            res.status(200).send({
                message: "Tst " + tstId + " deleted."
            });
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error deleting tst!"
            })
        }
    }

}

module.exports = controller;