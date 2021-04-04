'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
    timestamps: true
};

const getRequiredFieldMessage = (filed) => {
    const message = `${filed} Should Not Be Empty`;
    return [true, message];
};

const userLocationDeatilsSchema = new Schema({
    addrLatitude: { type: String, trim: true, require: getRequiredFieldMessage('Address Latitude') },
    addrLongitude: { type: String, trim: true, require: getRequiredFieldMessage('Address Longitude') },
    loginDate: { type: String, trim: true, require: getRequiredFieldMessage('Login Date') },
    distributor_id: { type: String, trim: true, require: getRequiredFieldMessage('Distributor Id') },
    userId: { type: String, trim: true, require: getRequiredFieldMessage('User Id') },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: String, default: '' }
}, options);


const userLocationDeatils = mongoose.model('userLocationDeatils', userLocationDeatilsSchema);
module.exports = userLocationDeatils;
