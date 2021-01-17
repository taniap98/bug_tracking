const express = require("express");
const router = express.Router();
const tstController = require("../controllers/tst")

const loginRouter= require("./login").controller;

router.post('/tst/add', tstController.addTst);
router.get('/tst', tstController.getAllTsts);
router.get('/tst/:id', tstController.getOneTst);
router.delete('/tst/delete/:id', tstController.deleteOneTst);




module.exports = router;