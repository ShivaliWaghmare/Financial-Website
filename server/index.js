const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

// Initialisation Of EXPRESS
const app = express();

app.use('/', require('./routes/authRoutes'))
const port = 8081;
app.listen(port, () => console.log(`Server is running on ${port}`))