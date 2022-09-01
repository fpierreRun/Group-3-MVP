const Joi = require('joi');

const eventSchema = Joi.object().keys({
  title: Joi.string().min(5).max(30).alter({
    post: (schema) => schema.required(),
    put: (schema) => schema.optional()
  }),
  author: Joi.string().min(5).max(30).alter({
    post: (schema) => schema.required(),
    put: (schema) => schema.optional()
  }),
  date: Joi.date().alter({
    post: (schema) => schema.required(),
    put: (schema) => schema.optional()
  }),
  state: Joi.string().min(4).max(25).alter({
    post: (schema) => schema.required(),
    put: (schema) => schema.optional()
  }),
  description: Joi.string().min(8).max(50).alter({
    post: (schema) => schema.required(),
    put: (schema) => schema.optional()
  }),
  comments: Joi.array().items(Joi.object())
})

const createEventSchema = eventSchema.tailor('post');
const updateEventSchema = eventSchema.tailor('put');

module.exports = { createEventSchema, updateEventSchema };