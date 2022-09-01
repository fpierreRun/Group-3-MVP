const { 
  createUserSchema, 
  updateUserSchema,
  createEventSchema,
  updateEventSchema 
} = require('../schemas');

const validateUser = ({ method, body }, res, next) => {
  if (method === 'POST') {
    const { error } = createUserSchema.validate(body)

    if (error) {
      console.log(error)
      res.json({ error: error })
      return
    }
    next()  
  } else if (method === 'PUT') {
    const { error } = updateUserSchema.validate(body)

    if (error) {
      console.log(error)
      res.json({ error: error })
      return
    }
    next()
  }
  return
}

const validateEvent = ({ method, body }, res, next) => {
  if (method === 'POST') {
    const { error } = createEventSchema.validate(body);

    if (error) {
      console.log(error)
      res.json(error)
      return
    }
    next()
  } else if (method === 'PUT') {
    const { error } = updateEventSchema.validate(body)

    if (error) {
      console.log(error)
      res.json(error)
      return
    }
    next()
  }
  return
}

module.exports = { 
  validateUser, 
  validateEvent 
};