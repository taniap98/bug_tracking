const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")

router.post('/adduser', userController.addUser);

module.exports = router;