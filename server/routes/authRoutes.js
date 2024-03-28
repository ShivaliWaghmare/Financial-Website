const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test} = require('../controllers/authControllers')

// MiddleWares
router.use(
    cors({
        // Creating two objects
        credentials: true,
        origin: 'https://localhost:5173'
    })
)
router.get('/', test)
module.exports = router