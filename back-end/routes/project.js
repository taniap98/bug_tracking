const express = require("express");
const router = express.Router();
const projController = require("../controllers/project")

const loginRouter= require("./login").controller;

router.post("/project/add", projController.addProject);
//router.get("/project", loginRouter.checkIfMPOnThisProject, projController.getProjects);
router.get("/project", projController.getProjects);
router.get("/project/:id", projController.getOneProject);
router.delete("/project/delete/:id", projController.deleteOneProject);


module.exports = router;