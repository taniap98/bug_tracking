const MpDB = require("../models").mp;

const express = require("express");
const router = express.Router();


const controller = {
    addMp: async(req, res) => {
        const mp = {
           
            projectId: req.body.projectId,
            userId: req.body.userId
        }

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
        let mpId = req.path.split('/')[2];
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
            let mpId = req.path.split('/')[2];
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