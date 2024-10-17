const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    name: { type: String, required: true },
    stations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Station' }],
    seatsAvailable: { type: Number, default: 100 }
});

module.exports = mongoose.model('Train', trainSchema);
