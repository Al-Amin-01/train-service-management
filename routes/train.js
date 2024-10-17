const express = require('express');
const { createTrain, updateTrain, getTrains } = require('../controllers/trainController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createTrain);
router.put('/:id', auth, updateTrain);
router.get('/', getTrains);

module.exports = router;
