const { Task } = require('../models/models');

class TaskController {
  async addTask(req, res, next) {
    const { title, content, expiredAt, status, userId } = req.body;
    const task = await Task.create({ title, content, expiredAt, status, userId});
    return res.json({task});
  } 

  async getTasks(req, res, next) {
    const id = req.params.id;
    const tasks = await Task.findAll({where: {userId: id}});
    return res.json({ tasks });
  }

  async getTask(req, res, next) {
    const id = req.params.id;
    const task = await Task.findOne({where: {id}});
    return res.json(task);
  }

  async deleteTask(req, res, next) {
    const id = req.params.id;
    await Task.destroy({where:{id}});
    return res.sendStatus(204);
  }

  async editTask(req, res, next) {

  }
}

module.exports = new TaskController();