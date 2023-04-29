const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');
const emailValidator = require('deep-email-validator');

class UserController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({message: "Email and password are required"});
    }

    const { valid, reason, validators } = await emailValidator.validate(email);
    
    if (!valid) {
      return res.status(400).json({ message: "Provide valid email address", reason: validators[reason].reason});
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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({message: "Email and password are required!"});
    }
    const candidate = await User.findOne({where: {email}});
    if (!candidate) {
      return res.status(404).json({message: "User not found"});
    }
    const match = await bcrypt.compare(password, candidate.password);
    if (!match) {
      return res.status(401).json({message: "Invalid password"});
    }
    const accessToken = jwt.sign(
      {
        "id": candidate.id,
        "email": candidate.email
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h"
      }
    )
    return res.status(200).json({accessToken});
  }

  async check(req, res, next) {
    const accessToken = jwt.sign(
      {
        "id": req.user.id,
        "email": req.user.email
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h"
      }
    )
    res.status(200).json({accessToken});
  }
}

module.exports = new UserController();