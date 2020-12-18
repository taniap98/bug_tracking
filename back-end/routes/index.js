const express = require('express')
const router = express.Router();
const userRouter = require('./user')
const bugRouter = require('./bug')
const projRouter = require('./project')
const tstRouter = require('./tst')
const mpRouter = require('./mp')
const otherRouter = require('./other')
const loginRouter = require('./login').router


if(process.env.NODE_ENV !== 'production') {
    router.use('/', otherRouter);
}

router.use('/', userRouter);
router.use('/', bugRouter);
router.use('/', projRouter);
router.use('/', tstRouter);
router.use('/', mpRouter);
router.use('/', loginRouter);

module.exports = router
