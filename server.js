const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//importing all routes 
const authRoutes = require('./routes/auth');
const stationRoutes = require('./routes/station');
const trainRoutes = require('./routes/train');
const walletRoutes = require('./routes/wallet');
const ticketRoutes = require('./routes/ticket');

const app = express();

app.use(express.json());

// all routes are added here
app.use('/api/auth', authRoutes);
app.use('/api/stations', stationRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/tickets', ticketRoutes);

//connect with db and listen for request
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected')
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    })
    .catch(err => console.log(err));



