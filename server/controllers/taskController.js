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
    const { title, content, expiredAt } = req.body;
    const id = req.params.id;
    const candidate = await Task.findOne({where: {id}});
    if (!candidate) {
      return res.sendStatus(404);
    }
    candidate.title = title;
    candidate.content = content;
    candidate.expiredAt = expiredAt;
    candidate.status = new Date().toISOString().slice(0, 10) > expiredAt ? "FAILED" : "IN PROGRESS";
    await candidate.save();
    res.status(200).json(candidate);
  }
}

module.exports = new TaskController();