const express = require('express');
const { createStation, updateStation, getStations } = require('../controllers/stationController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createStation);
router.put('/:id', auth, updateStation);
router.get('/', getStations);

module.exports = router;
