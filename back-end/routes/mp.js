const express = require("express");
const router = express.Router();
const mpController = require("../controllers/mp")

const loginRouter = require("./login").controller;

router.post('/mp/add', mpController.addMp);
router.get('/mp', mpController.getAllMps);
router.get('/mp/:id', mpController.getOneMp);
router.delete('/mp/delete/:id', mpController.deleteOneMp);



module.exports = router;