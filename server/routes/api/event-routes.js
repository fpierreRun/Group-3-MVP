const router = require('express').Router();
const {
  getAllEvents,
  createEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
  addComment,
  deleteComment
} = require('../../controllers/event-controllers');

router
  .route('/')
  .get(getAllEvents)
  .post(createEvent)

router
  .route('/:eventId')
  .get(getSingleEvent)
  .put(updateEvent)
  .delete(deleteEvent)

router
  .route('/:eventId/comment')
  .post(addComment)

router
  .route('/:eventId/comment/:commentId')
  .delete(deleteComment)

module.exports = router;