'use strict';
const User = require('./users');
const DeviceDetails = require('./device_details');
const UserLoginDetails = require('./user_login_details'); 
const UserLocationDetails = require('./user_location_details');
const UserWorkingHrs = require('./user_working_hrs');

module.exports = {
    User,
    DeviceDetails,
    UserLoginDetails,
    UserLocationDetails,
    UserWorkingHrs
}