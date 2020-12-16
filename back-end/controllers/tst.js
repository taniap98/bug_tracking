const TstDB = require("../models").tst;

const express = require("express");
const router = express.Router();


const controller = {
    addTst: async(req, res) => {
        const tst = {
            userId: req.body.userId,
            projectId: req.body.projectId
        }

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
    },

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
            let tstId = req.path.split('/')[2];
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
            let tstId = req.path.split('/')[2];
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