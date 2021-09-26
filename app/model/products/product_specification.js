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

const SpecificationListSchema = new Schema({
    specificationName: { type: String, trim: true, required:getRequiredFieldMessage('Specification Name')},
    attribute_id: { type: String, trim: true, default:""},
    value: { type: String, trim: true, default:""},
    unit: { type: String, trim: true, default:""},
    usValue: { type: String, trim: true, default:""},
    usUnit: { type: String, trim: true, default:""}
});

const ProductSpecificationSchema = new Schema({
    productId: { type: String, trim: true, required: getRequiredFieldMessage('Product Id')},
    specificationTag: { type: String, trim: true, required: getRequiredFieldMessage('Specification Tag')},
    attribute_id: { type: String, trim: true, default: '000'},
    specificationList: {type: [SpecificationListSchema], default: []}
});

const ProductSpecification = mongoose.model('ProductSpecification', ProductSpecificationSchema);

module.exports = ProductSpecification;