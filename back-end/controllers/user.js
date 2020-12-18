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
        let err = true;
        if(!user.email || !user.password){
            res.status(400).send("email & password must be completed");
            err = false;
        }
        if(!user.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
           res.status(400).send("Invalid email");
           err = false;
        }
        try{
            const findUser = await UserDB.findOne({
                where: {
                    email: user.email 
                }
            })
            if(findUser){
                throw new Error("exists");
            }
        } catch(err){
            console.log(err);
            res.status(500).send({
                message: "Email already registered!"
            })
        }
        if(user.password.length < 6){
            res.status(400).send("Password must have at least 6 characters");
            err = false; 
        }
        if(err){
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
            let userId = req.path.split('/')[3];
            const user = await UserDB.findOne({
                where: {
                    id: userId
                }
            })
            res.status(200).send(user);
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting one user!"
            })
        }
    },

    deleteOneUser: async(req, res) => {
        try{
            let userId = req.path.split('/')[3];
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