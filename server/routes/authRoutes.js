const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test} = require('../controllers/authControllers')

// MiddleWares
router.use(
    cors({
        // Creating two objects
        credentials: true,
        //Frontend URL
        origin: 'https://localhost:5175/'
    })
)
router.get('/', test)
module.exports = router