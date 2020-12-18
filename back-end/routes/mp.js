const express = require("express");
const router = express.Router();
const mpController = require("../controllers/mp")

const loginRouter = require("./login").controller;

router.post('/mp/', loginRouter.checkNotAuth, mpController.addMp);
router.get('/mp', loginRouter.checkNotAuth, mpController.getAllMps);
router.get('/mp/:id', loginRouter.checkNotAuth, mpController.getOneMp);
router.delete('/mp/delete/:id', loginRouter.checkNotAuth, mpController.deleteOneMp);



module.exports = router;