// controllers/CropController.js
const Crop = require('../models/Crop');


exports.listCrop = async (req, res) => {
    try {
        const { name, variety, quantity, unit, state, direct, type } = req.body;
        const newCrop = new Crop({ name, variety, quantity, unit, state, direct, type });
        const savedCrop = await newCrop.save();
        res.status(201).json(savedCrop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.queryBuyers = async (req, res) => {
    try {
        const { name, variety } = req.query;
        const buyers = await User.find({ type: 'buyer' }).exec();
        // Filter buyers based on crop name and variety
        // You may need to adjust this query based on your actual data structure
        const matchingBuyers = buyers.filter(buyer => {
            // Implement your filtering logic here
        });
        res.json(matchingBuyers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.uploadCrop = async (req, res) => {
    try {
        const { name, variety, quantity, unit, state, direct } = req.body;
        const { phone } = req.user; // Get authenticated user's phone number
        const newCrop = new Crop({ name, variety, quantity, unit, state, direct, owner: phone });
        const savedCrop = await newCrop.save();
        res.status(201).json(savedCrop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.queryCrop = async (req, res) => {
    try {
        const { name, variety } = req.query;
        const crops = await Crop.find({ name, variety }).exec();
        // Return the phone numbers of crop owners
        const ownerPhoneNumbers = crops.map(crop => crop.owner);
        res.json(ownerPhoneNumbers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

