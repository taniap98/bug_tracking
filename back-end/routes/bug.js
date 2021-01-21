const express = require("express");
const router = express.Router();
const bugController = require("../controllers/bug")

const loginRouter= require("./login").controller;

router.post("/bug/add", bugController.addBug);
/**/router.post("/bug/add/onlyTst",  loginRouter.checkIfTSTOnThisProject, bugController.addBug);
router.get("/bug", bugController.getBug);
/**/router.post("/bug/onlyMP", loginRouter.checkIfMP, bugController.seeMyBugs);
router.delete("/bug/delete/:id", bugController.deleteOneBug);
router.get("/bug/:id", bugController.getOneBug);
/**/router.put("/bug/changeStatus/:id", bugController.updateStatus);

module.exports = router;