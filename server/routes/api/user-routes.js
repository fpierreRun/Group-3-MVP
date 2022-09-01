const router = require('express').Router()
const { validateUserCreation, validateUserUpdate } = require('../../middleware/validation');
const {
  getAllUsers,
  createUser,
  findSingleUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controllers');

router
  .route('/')
  .get(getAllUsers)
  .post(validateUserCreation, createUser)

router
  .route('/:userId')
  .get(findSingleUser)
  .put(validateUserUpdate, updateUser)
  .delete(deleteUser)

module.exports = router;
