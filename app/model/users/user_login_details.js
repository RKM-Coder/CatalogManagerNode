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

const userLoginDetailsSchema = new Schema({
    distributorId: { type: String, trim: true, require: getRequiredFieldMessage('Distributor Id') },
    loginDate: { type: String, trim: true, require: getRequiredFieldMessage('Login Date') },
    userId: { type: String, trim: true, require: getRequiredFieldMessage('User Id') },
    loginCount: { type: String, trim: true, require: getRequiredFieldMessage('Login Count') },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: String, default: '' }
}, options);


const userLoginDetails = mongoose.model('userLoginDetails', userLoginDetailsSchema);
module.exports = userLoginDetails;