const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  importance: { type: String, required: true },
  description: { type: String, required: true },
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
