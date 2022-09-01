const router = require('express').Router()
const { validateUser } = require('../../middleware/validation');
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
  .post(validateUser, createUser)

router
  .route('/:userId')
  .get(findSingleUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;
