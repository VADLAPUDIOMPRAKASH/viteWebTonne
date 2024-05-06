// routes/users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// User registration route
router.post('/register', UserController.registerUser);

router.post('/login', UserController.login)

module.exports = router;
