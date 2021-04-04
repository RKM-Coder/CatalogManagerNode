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

const LanguagesSchema = new Schema({
    attribute_id: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
    language_id: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
    language_name: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
    translation: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
}, options);

const AttributeSchema = new Schema({
    attribute_id: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
    attribute_type: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
    attribute_name: { type: String,  default:'', trim: true, required: getRequiredFieldMessage("Attribute Name") },
    languages: { type:[LanguagesSchema], default:[], required: getRequiredFieldMessage("Languages") }
}, options);

const Attributes = mongoose.model('Attribute', AttributeSchema);
module.exports = Attributes;