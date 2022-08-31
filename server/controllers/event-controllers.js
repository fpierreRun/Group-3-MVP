const { Event } = require('../models');

const eventControllers = {
  async getAllEvents(req, res) {
    try {
      const events = await Event.find({})
      .select('-__v')

      res.json(events)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async createEvent({ body }, res) {
    try {
      const newEvent = await Event.create(body)

      res.json(newEvent)  
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async getSingleEvent({ params }, res) {
    try {
      const event = await Event.findById(params.eventId)

      if (!event) {
        res.status(404).json({ message: 'Unable to locate event' })
        return
      }
      res.json(event)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async updateEvent({ params, body }, res) {
    try {
      const event = await Event.findByIdAndUpdate(params.eventId, body, { new: true })

      if (!event) {
        res.status(404).json({ message: 'Unable to locate event' })
        return;
      }
      res.json(event)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  async deleteEvent({ params }, res) {
    try {
      const event = await Event.findByIdAndDelete(params.eventId)

      if (!event) {
        res.status(404).json({ message: 'Unable to locate event' })
        return;
      }
      res.json({ message: 'Successfully deleted event' })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}

module.exports = eventControllers;