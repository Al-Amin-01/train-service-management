const express = require('express');
const { addFunds, getWallet } = require('../controllers/walletController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add-funds', auth, addFunds);
router.get('/', auth, getWallet);

module.exports = router;
