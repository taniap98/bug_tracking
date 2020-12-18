const express = require("express");
const router = express.Router();
const bugController = require("../controllers/bug")

const loginRouter= require("./login").controller;

router.post("/bug/add", loginRouter.checkNotAuth, bugController.addBug);
router.get("/bug", loginRouter.checkNotAuth, bugController.getBug);
router.delete("/bug/delete/:id", loginRouter.checkNotAuth, bugController.deleteOneBug);
router.get("/bug/:id", loginRouter.checkNotAuth, bugController.getOneBug);
router.put("/bug/changeStatus/:id", loginRouter.checkNotAuth, bugController.updateStatus);
router.put("/bug/changeLinkResolve/:id", loginRouter.checkNotAuth, bugController.updateLinkResolve);

module.exports = router;