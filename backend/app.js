const express = require('express');
require('dotenv').config();
const db = require('./config/db')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



db.sync()
    .then(() => console.log('Database tables synced successfully...'))
    .catch(err => console.error('Failed to sync database tables'))




app.listen(port, async () => {
    console.log('Connected to port ', port)
})