// controllers/eventController.js

const eventService = require('../services/eventService');

// Додавання події
const addEvent = async (req, res) => {
  const { name, date, description, importance } = req.body;

  if (!name || !date || !description || !importance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newEvent = await eventService.createEvent({ name, date, description, importance });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Отримання всіх подій
const getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getEvents();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Оновлення події
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, date, description, importance } = req.body;

  if (!name || !date || !description || !importance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const updatedEvent = await eventService.updateEvent(id, { name, date, description, importance });

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Видалення події
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await eventService.deleteEvent(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
};
