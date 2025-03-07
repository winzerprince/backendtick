const Event = require('../models/Event');


const createEvent = async (req, res) => {
    try {
        const { name, date, venue, price, capacity, description } = req.body;
        const event = await Event.create({ name, date, venue, price, capacity, description });
        res.status(201).json(event);

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to create event' });


    }

}

const getEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(id);
        if (!event) return res.status(404).json({ message: 'Event not found in database' });
        res.status(200).json(event);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get event' });
    }
}

const getEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        res.status(200).json(events);

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get events' });

    }
}

const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, date, venue, price, capacity, description } = req.body;
        let event = await Event.findByPk(id);
        if (!event) return res.status(404).json({ message: 'Event not found in database' });
        await Event.update({ name, date, venue, price, capacity, description }, { where: { eventID: id } });
        event = await Event.findByPk(id);
        res.status(200).json(event);

    }
    catch (err) {

    }
}

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(id);
        event.destroy();
        res.status(200).json({ message: 'Event deleted' });

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to delete event' })
    }
}

module.exports = {
    createEvent,
    getEvent,
    getEvents,
    updateEvent,
    deleteEvent
}