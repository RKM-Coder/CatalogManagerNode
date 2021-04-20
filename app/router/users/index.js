'use strict';
const express = require('express');
const router = express.Router();

const userRoute = require('./users');
const deviceRoute = require('./device_details');
const userLocationRoute = require('./user_location_details');

router.use('/users', userRoute);
router.use('/device_details', deviceRoute);
/* router.use('/user_location_details', userRoute);
router.use('/user_login_details', userRoute);
router.use('/user_working_hrs', userRoute); */

module.exports = router;
