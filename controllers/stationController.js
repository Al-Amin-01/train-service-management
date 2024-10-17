const Station = require('../models/Station');

exports.createStation = async (req, res) => {
    try {
        const { name, location } = req.body;
        const station = new Station({ name, location });
        await station.save();
        res.status(201).json(station);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateStation = async (req, res) => {
    try {
        const station = await Station.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!station) return res.status(404).json({ message: 'Station not found' });
        res.status(200).json(station);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStations = async (req, res) => {
    try {
        const stations = await Station.find();
        res.status(200).json(stations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
