const express = require("express");
const router = express.Router();
const projController = require("../controllers/project")

router.post("/addproject", projController.addProject);
router.get("/seeprojects", projController.getProjects);
router.get("/project/:id", projController.getOneProject);
router.delete("/deleteproject/:id", projController.deleteOneProject);


module.exports = router;