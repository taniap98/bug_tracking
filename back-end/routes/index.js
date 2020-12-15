const express = require('express')
const router = express.Router();
const userRouter = require('./user')
const otherRouter = require('./other')

if(process.env.NODE_ENV !== 'production') {
    router.use('/', otherRouter);
}

router.use('/', userRouter);

module.exports = router
