const Joi = require('joi')

const commentSchema = Joi.object().keys({
  commentBody: Joi.string().min(5).max(30).required(),
  author: Joi.string().min(5).max(30).required()
})

module.exports = commentSchema;