const router = require('express').Router()
const {
  getAllUsers,
  createUser,
  findSingleUser,
  updateUser,
  deleteUser,
  authenticateLogin,
  lookupUserByToken
} = require('../../controllers/user-controllers');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

router
  .route('/:userId')
  .get(findSingleUser)
  .put(updateUser)
  .delete(deleteUser)

router
  .route('/auth')
  .post(authenticateLogin)

router
  .route('/lookup')
  .get(lookupUserByToken)

module.exports = router;
