const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.get('/home', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Помилка при отриманні подій' });
  }
});

router.post('/events', async (req, res) => {
  const { name, date, description, importance } = req.body;

  if (!name || !date || !description || !importance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newEvent = new Event({
      name,
      date,
      description,
      importance,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/events/:id', async (req, res) => {
  const { id } = req.params;
  const { name, date, description, importance } = req.body;

  if (!name || !date || !description || !importance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { name, date, description, importance },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/events/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
