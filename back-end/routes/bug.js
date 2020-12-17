const express = require("express");
const router = express.Router();
const bugController = require("../controllers/bug")

router.post("/addbug", bugController.addBug);
router.get("/seebugs", bugController.getBug);
router.delete("/deleteOneBug/:id", bugController.deleteOneBug);
router.get("/getonebug/:id", bugController.getOneBug);
router.put("/changeStatus/:id", bugController.updateStatus);
router.put("/changeLinkResolve/:id", bugController.updateLinkResolve);

module.exports = router;