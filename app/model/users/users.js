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

const UserSchema = new Schema({
    name: { type: String, required: getRequiredFieldMessage('Name') },
    email: { type: String, required: getRequiredFieldMessage('Email'), trim: true, unique: true },
    mobile: { type: String, default: '000', trim: true },
    password: { type: String, default: '', trim: true },
    appID: { type: String, default: '', trim: true },
    distributor: { type: String, default: '', trim: true },
    profilePic: { type: String, default: '', trim: true },
    country: { type: String, default: '', trim: true },
    countryCode: { type: String, default: '', trim: true },
    region: { type: String, default: '', trim: true },
    regionId: { type: String, default: '', trim: true },
    countryId: { type: String, default: '', trim: true },
    otp: { type: String, default: '', trim: true },
    longitude: { type: String, default: '', trim: true },
    longitude: { type: String, default: '', trim: true },
    distributorId: { type: String, default: '', trim: true },
    dealerCode: { type: String, default: '', trim: true },
    roleId: { type: String, default: '', trim: true },
    jobtype: { type: String, default: '', trim: true },
    isEmailVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    lastLogin: { type: Date, default: Date.now },
    lastFailedLogin: Date,
    currentLogin: { type: Date, default: Date.now },
    createdAt: { type: String, default: '' }
}, options);


const User = mongoose.model('User', UserSchema);
module.exports = User;