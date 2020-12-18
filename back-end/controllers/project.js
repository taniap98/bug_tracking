const ProjectDB = require("../models").project;

const express = require("express");
const router = express.Router();


const controller = {
    addProject: async (req, res) => {
        const project = {
            name: req.body.name,
            repository: req.body.repository,
            userId: req.body.userId
        }
        let err = true;
        if(!project.name || !project.userId || !project.repository){
            res.status(400).send("name, userId, repository must be completed");
            err = false;
        }

        if(project.repository && !project.repository.includes("https://")){
            res.status(400).send("It requiers a link");
            err = false;
        }
        if(err){
            try{
                const findProject = await ProjectDB.findOne({
                    where: {
                        name: project.name
                    }
                })
                if(findProject){
                    throw new Error("exists");
                }

            } catch(err){
                console.log(err);
                res.status(500).send({
                    message: "Name already registered!"
                })
            }

            try{
                const projDB = await ProjectDB.create(project);
                res.status(200).send({
                    message: "Project added."
                })
            } catch(error){
                console.log(error);
                res.status(500).send({
                    message: "Error creating new project!"
                })
            }
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
    },

    getOneProject: async(req, res) => {
        try{
            let projectId = req.path.split('/')[3];
            const project = await ProjectDB.findOne({
                where: {
                    id: projectId
                }
            })
            res.status(200).send(project);
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error selecting one project!"
            })
        }
    },

    deleteOneProject: async(req, res) => {
        try{
            let projectId = req.path.split('/')[3];
            const project = await ProjectDB.destroy({
                where: {
                    id: projectId
                }
            })
            res.status(200).send({
                message: "Project " + projectId + " deleted."
            });
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: "Error deleting project!"
            })
        }
    }
}

module.exports = controller;