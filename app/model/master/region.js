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

const RegionSchema = new Schema({
    name: { type: String, trim: true, unique: true, require: getRequiredFieldMessage('Region Name') },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: String, default: '' }
}, options);


const Regions = mongoose.model('Regions', RegionSchema);
module.exports = Regions;