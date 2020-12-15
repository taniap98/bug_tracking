const UserDB = require("../models").user;

const express = require("express");
const router = express.Router();


const controller = {
    addUser: async(req, res) => {
        const user = {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nrMP: req.body.nrMP,
            nrTST:req.body.nrTST
        }

        try{
            const newUser = await UserDB.create(user);
            res.status(200).send({
                message: "User added."
            })
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error creating new user!"
            })
        }
    },

    getAllUsers: async(req, res) => {
        try{
            const users = await UserDB.findAll();
            res.status(200).send(users);
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting all users!"
            })
        }
    },

    getOneUser: async(req, res) => {
        try{
            let userId = req.path.split('/')[2];
            const user = await UserDB.findOne({
                where: {
                    id: userId
                }
            })
            res.status(200).send(user);
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting one users!"
            })
        }
    },

    deleteOneUser: async(req, res) => {
        try{
            let userId = req.path.split('/')[2];
            const user = await UserDB.destroy({
                where: {
                    id: userId
                }
            })
            res.status(200).send({
                message: "User " + userId + " deleted."
            });
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error deleting user!"
            })
        }
    }

}

module.exports = controller;