const Joi = require('joi')
/*

Validation schema for user object. Alter method allows for the changing of certain parameters without having to repeat the entire schema. Post requests will require each field to be filled out, while a put request has all fields optional, as a user may not want to update every field. These "2" schemas are then saved to variables differentiated by using the tailor method.

*/
const userSchema = Joi.object().keys({
  firstName: Joi.string().min(2).max(15)
    .alter({
      post: (schema) => schema.required(),
      put: (schema) => schema.optional()
    }),
  lastName: Joi.string().min(2).max(25)
    .alter({
      post: (schema) => schema.required(),
      put: (schema) => schema.optional()
    }),
  password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/)
    .alter({
      post: (schema) => schema.required(),
      put: (schema) => schema.optional()
    }),
  email: Joi.string().email()
    .alter({
      post: (schema) => schema.required(),
      put: (schema) => schema.optional()
    })
})  

const createUserSchema = userSchema.tailor('post');
const updateUserSchema = userSchema.tailor('put');

module.exports = { createUserSchema, updateUserSchema };