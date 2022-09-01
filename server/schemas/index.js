const { createUserSchema, updateUserSchema } = require('./user-schema');
const { createEventSchema, updateEventSchema } = require('./event-schema');
const commentSchema = require('./comment-schema')

module.exports = { 
  createUserSchema, 
  updateUserSchema,
  createEventSchema,
  updateEventSchema,
  commentSchema 
};