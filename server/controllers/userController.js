const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

class UserController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({message: "Email and password are required"});
    }
    const candidate = await User.findOne({where: {email}});
    if (candidate) {
      return res.status(409).json({message: "User already exists"});
    }
    const hashPassword = await bcrypt.hash(password, 5);
    await User.create({email, password: hashPassword });
    return res.status(201).json({message: "User created"});
  }

  async login(req, res, next) {

  }

  async check(req, res, next) {

  }
}

module.exports = new UserController();