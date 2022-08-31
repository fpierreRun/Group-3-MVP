const { User } = require('../models');

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
  }
}

module.exports = userController;