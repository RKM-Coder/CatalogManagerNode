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

const userWorkingHrsSchema = new Schema({
    totalActiveTime: { type: String, trim: true, require: getRequiredFieldMessage('Total Active Time') },
    loginDate: { type: String, trim: true, require: getRequiredFieldMessage('Login Date') },
    totalLoginTime: { type: String, trim: true, require: getRequiredFieldMessage('Total Login Time') },
    distributor_id: { type: String, trim: true, require: getRequiredFieldMessage('Distributor Id') },
    userId: { type: String, trim: true, require: getRequiredFieldMessage('User Id') },
    regionId: { type: String, default: '', trim: true },
    regionName: { type: String, default: '', trim: true },
    countryname: { type: String, default: '', trim: true },
    countryid: { type: String, default: '', trim: true },
    distributorname: { type: String, default: '', trim: true },
    username: { type: String, default: '', trim: true },
    lastLoginDateTime: { type: String, trim: true, require: getRequiredFieldMessage('Last Login Date Time') },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: String, default: '' }
}, options);


const userWorkingHrs = mongoose.model('userWorkingHrs', userWorkingHrsSchema);
module.exports = userWorkingHrs;