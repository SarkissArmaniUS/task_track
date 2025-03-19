const Event = require('../models/event');

const createEvent = async (data) => {
  const { name, date, description, importance } = data;

  const newEvent = new Event({ name, date, description, importance });
  return newEvent.save();
};

const getEvents = async () => {
  return Event.find();
};

const getEventById = async (id) => {
  return Event.findById(id);
};

const updateEvent = async (id, data) => {
  return Event.findByIdAndUpdate(id, data, { new: true });
};

const deleteEvent = async (id) => {
  return Event.findByIdAndDelete(id);
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
