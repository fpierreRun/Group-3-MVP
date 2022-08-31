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
  }
}

module.exports = userController;