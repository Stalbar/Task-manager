const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('task', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  expiredAt: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.ENUM('IN PROGRESS, FAILED, CANCELED'), allowNull: false}
});

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING }
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  User,
  Task
}