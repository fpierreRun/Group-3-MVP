const router = require('express').Router();
const {
  getAllEvents,
  createEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent
} = require('../../controllers/event-controllers');

router
  .route('/')
  .get(getAllEvents)
  .post(createEvent)

router
  .route('/:eventId')
  .get(getSingleEvent)
  // .post()
  .put(updateEvent)
  .delete(deleteEvent)

module.exports = router;