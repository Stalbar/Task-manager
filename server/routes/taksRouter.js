const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.get('/all', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.post('/', taskController.addTask);
router.put('/:id', taskController.editTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;