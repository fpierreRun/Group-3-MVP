const router = require('express').Router();

const { 
  validateEvent, 
  validateComment 
} = require('../../middleware/validation');

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
  .post(validateEvent, createEvent)

router
  .route('/:eventId')
  .get(getSingleEvent)
  .put(validateEvent, updateEvent)
  .delete(deleteEvent)

router
  .route('/:eventId/comment')
  .post(validateComment, addComment)

router
  .route('/:eventId/comment/:commentId')
  .delete(deleteComment)

module.exports = router;