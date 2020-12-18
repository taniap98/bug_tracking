const express = require("express");
const router = express.Router();
const bugController = require("../controllers/bug")

const loginRouter= require("./login").controller;

router.post("/bug/add", loginRouter.checkNotAuth, bugController.addBug);
/**/router.post("/bug/add/onlyTst", loginRouter.checkNotAuth,  loginRouter.checkIfTSTOnThisProject, bugController.addBug);
router.get("/bug", loginRouter.checkNotAuth, bugController.getBug);
/**/router.get("/bug/onlyMP", loginRouter.checkIfMP, bugController.seeMyBugs);
router.delete("/bug/delete/:id", loginRouter.checkNotAuth, bugController.deleteOneBug);
router.get("/bug/:id", loginRouter.checkNotAuth, bugController.getOneBug);
/**/router.put("/bug/changeStatus/:id", loginRouter.checkNotAuth, loginRouter.checkIfMPOnThisProject, bugController.updateStatus);
//router.put("/bug/changeLinkResolve/:id", loginRouter.checkNotAuth, bugController.updateLinkResolve);

module.exports = router;