const express = require("express");
const router = express.Router();
const mpController = require("../controllers/mp")

router.post('/addmp', mpController.addMp);
router.get('/mps', mpController.getAllMps);
router.get('/mp/:id', mpController.getOneMp);
router.delete('/deletemp/:id', mpController.deleteOneMp);



module.exports = router;