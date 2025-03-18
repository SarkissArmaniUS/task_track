// const eventService = require("../services/eventService");

// const getEvents = async (req, res) => {
//   try {
//     const events = await eventService.getAllEvents();
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).json({ message: "Event err while get" });
//   }
// };

// const createEvent = async (req, res) => {
//   const { name, date, description, importance } = req.body;

//   if (!name || !date || !description || !importance) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const event = await eventService.createEvent({ name, date, description, importance });
//     res.status(201).json(event);
//   } catch (error) {
//     res.status(500).json({ message: "Event err while create" });
//   }
// };

// const updateEvent = async (req, res) => {
//   const { id } = req.params;
//   const { name, date, description, importance } = req.body;

//   try {
//     const event = await eventService.updateEvent(id, { name, date, description, importance });

//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({ message: "Event err while update" });
//   }
// };

// const deleteEvent = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedEvent = await eventService.deleteEvent(id);

//     if (!deletedEvent) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     res.status(200).json({ message: "Event deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error while Event Del" });
//   }
// };

// module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
