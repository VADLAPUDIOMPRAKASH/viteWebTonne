// routes/crops.js
const express = require('express');
const router = express.Router();
const CropController = require('../controllers/CropController');
const authenticate = require('../middleware/authenticate');
// Crop listing route
router.post('/list', CropController.listCrop);


// Query buyers route
router.get('/query-buyers', CropController.queryBuyers);

router.post('/upload', authenticate, CropController.uploadCrop);

// Crop query route
router.get('/query', CropController.queryCrop);

module.exports = router;
