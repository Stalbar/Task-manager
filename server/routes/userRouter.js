const Router = require('express');
const router = new Router();

router.post('/registration');
router.post('/auth');
router.get('/check');

module.exports = router;