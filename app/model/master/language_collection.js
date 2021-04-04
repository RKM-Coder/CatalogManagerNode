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

const LanguageSchema = new Schema({
    language_name: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Language Name") },
    short_key: { type: String, default:'', trim: true, required: getRequiredFieldMessage("Language Name") },
});

const Languages = mongoose.model("Language", LanguageSchema);

module.exports = Languages;