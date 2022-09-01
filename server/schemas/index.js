const { createUserSchema, updateUserSchema } = require('./user-schema');
const { createEventSchema, updateEventSchema } = require('./event-schema');

module.exports = { 
  createUserSchema, 
  updateUserSchema,
  createEventSchema,
  updateEventSchema 
};