const express = require('express');
require('dotenv').config();
const db = require('./config/db')
const cors = require('cors');
const userRoutes = require('./routes/user-routes');
const ticketRoutes = require('./routes/ticket-routes');
const eventRoutes = require('./routes/event-routes');
const paymentRoutes = require('./routes/payment-routes');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);
app.use('/api/tickets/', ticketRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/payments', paymentRoutes);

db.sync()
    .then(() => console.log('Database tables synced successfully...'))
    .catch(err => console.error('Failed to sync database tables'))




app.listen(port, async () => {
    console.log('Connected to port ', port)
})