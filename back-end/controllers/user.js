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
    }
}

module.exports = controller;