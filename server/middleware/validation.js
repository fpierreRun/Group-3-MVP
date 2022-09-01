const { userSchema, updateUserSchema } = require('../schemas');

const validateUserCreation = ({ body }, res, next) => {
  const { error } = userSchema.validate(body)

  if (error) {
    console.log(error)
    res.json({ error: error })
    return
  }
  next()
}

const validateUserUpdate = ({ body }, res, next) => {
  const { error } = updateUserSchema.validate(body)

  if (error) {
    console.log(error)
    res.json({ error: error })
    return
  }
  next()
}

module.exports = { validateUserCreation, validateUserUpdate };