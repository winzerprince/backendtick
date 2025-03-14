const express = require('express');
const ticketController = require('../middleware/ticket-controller.js');
const router = express.Router();

// CRUD operations for tickets
router.post('/', ticketController.createTicket);
router.get('/:id', ticketController.getTicket);
router.get('/', ticketController.getTickets);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;