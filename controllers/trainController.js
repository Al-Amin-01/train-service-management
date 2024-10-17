const Train = require('../models/Train');

exports.createTrain = async (req, res) => {
    try {
        const { name, stations, seatsAvailable } = req.body;
        console.log(req.body)
        const train = new Train({ name, stations, seatsAvailable });
        
        if (!name || !stations || !seatsAvailable) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        await train.save();
        res.status(201).json(train);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


exports.updateTrain = async (req, res) => {
    try {
        const train = await Train.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!train) return res.status(404).json({ message: 'Train not found' });
        res.status(200).json(train);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTrains = async (req, res) => {
    try {
        const trains = await Train.find().populate('stations');
        res.status(200).json(trains);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
