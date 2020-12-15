const ProjectDB = require("../models").project;

const express = require("express");
const router = express.Router();


const controller = {
    addProject: async (req, res) => {
        const proj = {
            name: req.body.name,
            userId: req.body.userId
        }
        try{
            const projDB = await ProjectDB.create(proj);
            res.status(200).send({
                message: "Project added."
            })
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error creating new project!"
            })
        }
    },

    getProjects: async(req, res) => {
        try{
            const projects = await ProjectDB.findAll();
            res.status(200).send(projects);
        } catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error getting projects!"
            })
        }
    }
}

module.exports = controller;