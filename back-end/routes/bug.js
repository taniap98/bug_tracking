const express = require("express");
const router = express.Router();
const bugController = require("../controllers/bug")

router.post("/addbug", bugController.addBug);

module.exports = router;