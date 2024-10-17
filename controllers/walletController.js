const User = require('../models/User');

//add amount to particular user who is logged in.(whose token is in use)
exports.addFunds = async (req, res) => {
    try {
        const { amount } = req.body;
        const user = await User.findById(req.user.id);
        user.wallet += amount;
        await user.save();
        res.status(200).json({ wallet: user.wallet });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//check amount of particular user who is logged in.(whose token is in use)
exports.getWallet = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({ wallet: user.wallet });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
