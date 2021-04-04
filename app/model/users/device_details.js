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

const DeviceSchema = new Schema({
    deviceName: { type: String, trim: true, default: '' },
    deviceId: { type: String, trim: true, unique: true, required: getRequiredFieldMessage('Device ID') },
    OsName: { type: String, default: '' },
    OsVersion: { type: String, default: '' },
    deviceId: { type: String, default: '' },
    appID: { type: String, default: '', unique: true },
    notificationId: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: String, default: '' }
}, options);

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;