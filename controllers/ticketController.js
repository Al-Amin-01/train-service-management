const Ticket = require('../models/Ticket');
const Train = require('../models/Train');
const User = require('../models/User');

exports.purchaseTicket = async (req, res) => {
    try {
        const { trainId, stations } = req.body;
        const user = await User.findById(req.user.id);
        const train = await Train.findById(trainId);

        if (!train || !user) return res.status(404).json({ message: 'Train or User not found' });

        
        if (user.wallet === 0) return res.status(400).json({ message: 'Insufficient funds' });

        user.wallet -= 1;
        await user.save();

        const ticket = new Ticket({ user: user._id, train: train._id, stations });
        await ticket.save();

        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


