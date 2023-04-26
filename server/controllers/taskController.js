const { Task } = require('../models/models');

class TaskController {
  async addTask(req, res, next) {
    const { title, content, expiredAt, status, userId } = req.body;
    const task = await Task.create({ title, content, expiredAt, status, userId});
    return res.json({task});
  } 

  async getTasks(req, res, next) {

  }

  async getTask(req, res, next) {

  }

  async deleteTask(req, res, next) {

  }

  async editTask(req, res, next) {

  }
}

module.exports = new TaskController();