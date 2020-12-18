const MpDB = require("../models").mp;
const UserDB = require("../models").user;
const ProjectDB = require("../models").project;

const express = require("express");
const router = express.Router();


const controller = {
    addMp: async(req, res) => {
        const mp = {
           
            projectId: req.body.projectId,
            userId: req.body.userId
        }

        let err = true;

        try{
            const findUser = await UserDB.findOne({
                where: {
                    id: mp.userId
                }
            })

            const findProject = await ProjectDB.findOne({
                where: {
                    id: mp.projectId
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

        if(!mp.projectId || !mp.userId){
            res.status(400).send("projectId & userId must be completed");
            err = false;
        }
        if(err)
            try{
                const newMp = await MpDB.create(mp);
                res.status(200).send({
                    message: "Mp added."
                })
            } catch(error){
                console.log(error);
                res.status(500).send({
                    message: "Error creating new mp!"
                })
            }
    },

    getAllMps: async(req, res) => {
        try{
            const mps = await MpDB.findAll();
            res.status(200).send(mps);        
        } catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error selecting all mps!"
        })
    }
},

    getOneMp: async(req, res) => {
        try{
        let mpId = req.path.split('/')[3];
        const mp = await MpDB.findOne({
            where: {
                id: mpId
            }
        })
        res.status(200).send(mp);
    } catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error selecting one mp!"
        })
    }
},

    deleteOneMp: async(req, res) => {
        try{
            let mpId = req.path.split('/')[3];
            const mp = await MpDB.destroy({
                where: {
                    id: mpId
                }
            })
            res.status(200).send({
                message: "Mp " + mpId + " deleted."
            });
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error deleting mp!"
            })
        }
    }

}

module.exports = controller;