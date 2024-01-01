const express = require('express');
const router = express.Router();
const bookingController = require('../../../controller/client/v1/booking');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

module.exports = router;
