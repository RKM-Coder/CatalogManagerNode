'use strict';
const express = require('express');
const router = express.Router();

const roleRoute = require('./role');
const regionRoute = require('./region');
const countryRoute = require('./country');

router.use('/role', roleRoute);
router.use('/region', regionRoute);
router.use('/country', countryRoute);

module.exports = router;