const express = require("express");
const router = express.Router();
const tstController = require("../controllers/tst")

router.post('/addtst', tstController.addTst);
router.get('/tsts', tstController.getAllTsts);
router.get('/tst/:id', tstController.getOneTst);
router.delete('/deletetst/:id', tstController.deleteOneTst);




module.exports = router;