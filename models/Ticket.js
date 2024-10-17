const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' ,required: true},
    train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' , required: true },
    stations: [{ type: String }],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
