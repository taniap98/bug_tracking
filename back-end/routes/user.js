const express = require("express");
const router = express.Router();
const userController = require("../controllers/user")

const loginRouter= require("./login").controller;


router.post('/user/register', userController.addUser);
router.get('/user', loginRouter.checkNotAuth, userController.getAllUsers);
router.get('/user/:id', loginRouter.checkNotAuth, userController.getOneUser);
router.delete('/user/delete/:id', loginRouter.checkNotAuth, userController.deleteOneUser);





module.exports = router;