const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Routes
const router2 = require('./Routes/auth');
const router3 = require('./Routes/privateReadings');
const router4 = require('./Routes/slpaReadings');
const router5 = require('./Routes/graph');
const router6 = require('./Routes/tap');
const router7 = require('./Routes/walve');


// Connect to mongoDB
mongoose.connect(process.env.DATABASE_CONNECTION_STRING);


// Middleware
app.use(express.json());
app.use(cors());
app.use('/login', router2);
app.use('/privateReadings', router3);   
app.use('/slpaReadings', router4);
app.use('/graph', router5);
app.use('/tap', router6);
app.use('/walve', router7);




// Listen to port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
