const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const usersRouter = require('./routes/users');
const cropsRouter = require('./routes/crops');

app.use('/users', usersRouter);
app.use('/crops', cropsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
