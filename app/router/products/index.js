'use strict';
const express = require('express');
const router = express.Router();

const productDetailsRoute = require('./product_details');

router.use('/product_details',productDetailsRoute);

module.exports = router;