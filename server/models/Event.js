const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    // May possibly need to change type to string due to how react-calender formats date value
    type: Date,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Event = model('Event', EventSchema);
module.exports = Event;