const express = require("express");
const router = express.Router();
const projController = require("../controllers/project")

const loginRouter= require("./login").controller;

router.post("/project/add", loginRouter.checkNotAuth, projController.addProject);
router.get("/project", loginRouter.checkNotAuth, loginRouter.checkIfMPOnThisProject, projController.getProjects);
router.get("/project/:id", loginRouter.checkNotAuth, projController.getOneProject);
router.delete("/project/delete/:id", loginRouter.checkNotAuth, projController.deleteOneProject);


module.exports = router;