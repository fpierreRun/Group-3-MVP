const { User } = require('../models');
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const bcrypt = require('bcrypt')

require('dotenv').config()

const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find({})
      .select('-__v')
      .sort({ _id: -1 })
      
      res.json(users)

    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  },
  async createUser({ body }, res) {
    try {
      const createdUser = await User.create(body)
      
      if (createdUser) {
        res.json({ message: 'successfully created user' })
      } else {
        res.status(400).json({ message: 'bad requrest' })
      }

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async findSingleUser({ params }, res) {
    try {
      const user = await User.findOne({ _id: params.userId})
      .select('-__v')

      if (!user) {
        res.status(404).json({ message: 'Unable to locate user' })
        return
      }
      res.json(user);

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async updateUser({ params, body }, res) {
    try {
      const user = await User.findByIdAndUpdate(params.userId, body, { new: true });

      if (!user) {
        res.status(404).json({ message: 'Unable to locate user' })
        return
      }
      res.json(user)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async deleteUser({ params }, res) {
    try {
      const user = await User.findByIdAndDelete(params.userId, { new: true })

      if (!user) {
        res.status(404).json({ message: 'Unable to locate user' })
        return;
      }

      res.json({ message: 'User successfully deleted' })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async authenticateLogin(req, res) {
    const foundUser = await User.findOne({ email: req.body.email })
    if (!foundUser) return res.status(401).json({ message: 'Login Failed.'})

    const isValid = await bcrypt.compare(req.body.password, foundUser.password)
    if (!isValid) return res.status(401).json({ message: 'Login Failed.' })

    const { password, ...modifiedUser } = foundUser

    const token = jwt.sign({ _id: foundUser._id, email: foundUser.email}, process.env.JWT_SECRET)

    res
      .status(200)
      .set({ "auth-token": token })
      .json({ result: 'success', user: modifiedUser, token: token })
  },
  async lookupUserByToken(req, res) {
    if( !req.headers || !req.headers.cookie ) return res.status(401).json({msg: 'un-authorized'})

    const cookies = cookie.parse(req.headers.cookie)

    const token = cookies['auth-token']
    if( !token ) return res.status(401).json({ msg: 'un-authorized'})

    const isVerified = jwt.verify(token, process.env.JWT_SECRET)
    if ( !isVerified ) return res.status(401).json({ msg: 'un-authorized'})

    const user = await User.findById(isVerified._id)
    if ( !user ) return res.status(401).json({ msg: 'un-authorized'})

    return res.status(200).json({ result: 'success', payload: { _id: user._id, email: user.email } })
  }
}

module.exports = userController;