const express = require("express");
const router = express.Router();
const tstController = require("../controllers/tst")

const loginRouter= require("./login").controller;

router.post('/tst/add', loginRouter.checkNotAuth, tstController.addTst);
router.get('/tst', loginRouter.checkNotAuth, tstController.getAllTsts);
router.get('/tst/:id', loginRouter.checkNotAuth, tstController.getOneTst);
router.delete('/tst/delete/:id', loginRouter.checkNotAuth, tstController.deleteOneTst);




module.exports = router;