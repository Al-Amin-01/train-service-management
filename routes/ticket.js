const express = require('express');
const { purchaseTicket } = require('../controllers/ticketController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/purchase', auth, purchaseTicket);

module.exports = router;
