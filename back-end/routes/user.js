const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")

const loginRouter= require("./login").controller;


router.post('/user/register', userController.addUser);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getOneUser);
router.delete('/user/delete/:id', userController.deleteOneUser);





module.exports = router;