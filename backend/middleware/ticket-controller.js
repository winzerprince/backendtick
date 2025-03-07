const Ticket = require('../models/Ticket.js');

const createTicket = async (req, res) => {
    try {
        const { eventID, userID } = req.body;
        const ticket = await Ticket.create({ eventID, userID })
        res.status(201).json(ticket);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to create Ticket' });

    }
}

const getTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findByPk(id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found in database' });
        res.status(200).json(ticket);

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get Ticket' });

    }
}

const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);

    }
    catch (err) {
        console.erro('Error: ', err);
        res.status(500).json({ message: 'Failed to get Tickets' });

    }

}
// Not sure if updateTicket will be more useful than harmful considering security and data integrity
const updateTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const { eventID, userID, status, purchaseDate } = req.body;
        let ticket = await Ticket.findByPk(id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found in databaase' });
        await Ticket.update({ eventID, userID, status, purchaseDate }, { where: { ticketID: id } })
        ticket = await Ticket.findByPk(id);
        res.status(200).json(ticket);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to update Ticket' });
    }
}

const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findByPk(id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found in database' });
        await ticket.destroy;
        res.status(200).json({ message: 'Ticket deleted' });
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to delete Ticket' })
    }
}

module.exports = {
    createTicket,
    getTicket,
    getTickets,
    updateTicket,
    deleteTicket,
}