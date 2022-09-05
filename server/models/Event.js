const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/format-date');

const CommentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  commentBody: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => formatDate(createdAtVal)
  }
},
{
  toJSON: {
    getters: true
  },
  id: false
})

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
    required: true,
    get: dateVal => formatDate(dateVal)
  },
  state: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
},
{
  toJSON: {
    getters: true
  },
  id: false
})

const Event = model('Event', EventSchema);
module.exports = Event;