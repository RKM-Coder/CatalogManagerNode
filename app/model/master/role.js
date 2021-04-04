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

const RoleSchema = new Schema({
    name: { type: String, trim: true, unique: true, require: getRequiredFieldMessage('Role Name') },
    attribute_id: {type: String, trim: true},
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: String, default: '' }
}, options);


const Role = mongoose.model('Role', RoleSchema);
module.exports = Role;