const { userSchema } = require('../schemas');

const validateUser = ({ body }, res, next) => {
  const { error } = userSchema.validate(body)

  if (error) {
    console.log(error)
    res.json({ error: error })
    return
  }
  next()
}

module.exports = { validateUser };