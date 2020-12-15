const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")

router.post('/adduser', userController.addUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getOneUser);
router.delete('/deleteuser/:id', userController.deleteOneUser);


module.exports = router;