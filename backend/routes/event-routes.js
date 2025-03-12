const express = require('express');
const eventController = require('../middleware/event-controller.js');
const router = express.Router();

// CRUD operations for events
router.post('/', eventController.createEvent)
router.get('/:id', eventController.getEvent);
router.get('/', eventController.getEvents);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;