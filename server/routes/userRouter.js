const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/auth', userController.login);
router.get('/check', userController.check);

module.exports = router;