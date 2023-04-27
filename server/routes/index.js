const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const taskRouter = require('./taksRouter');
const authMiddleware = require('../middleware/authMiddleware');

router.use('/user', userRouter);
router.use(authMiddleware);
router.use('/task', taskRouter);

module.exports = router;