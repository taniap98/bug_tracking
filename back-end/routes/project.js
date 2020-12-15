const express = require("express");
const router = express.Router();
const projController = require("../controllers/project")

router.post("/addproject", projController.addProject);
router.get("/seeprojects", projController.getProjects);


module.exports = router;