const Joi = require('joi')

const userSchema = Joi.object().keys({
  firstName: Joi.string().min(2).max(15).required(),
  lastName: Joi.string().min(2).max(25).required(),
  password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
  email: Joi.string().email().required()
})  



module.exports = userSchema;