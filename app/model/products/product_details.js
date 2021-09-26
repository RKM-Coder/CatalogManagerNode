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

const DistributorSchema = new Schema({
    distributorName: { type: String, trim: true, required: getRequiredFieldMessage('Distributor Name')},
    distributorId: { type: String, trim: true, required: getRequiredFieldMessage('Distributor Id')},
}, options);

const ProductDetailsSchema = new Schema({
    productName: { type: String, trim: true, required: getRequiredFieldMessage('Product Name')},
    operatingWeight: { type: String, trim: true, default: '' },
    description: { type: String, trim: true, default: '' },
    categoryName: { type: String, trim: true, required: getRequiredFieldMessage('Product Category Name')},
    categoryId: { type: String, trim: true, required: getRequiredFieldMessage('Product Category Id')},
    subCategoryName: { type: String, trim: true, required: getRequiredFieldMessage('Product Sub-Category Name')},
    subCategoryId: { type: String, trim: true, required: getRequiredFieldMessage('Product Sub-Category Id')},
    attribute_id: { type: String, trim: true, default: '000'},
    distributorsList: { type: [DistributorSchema], trim: true, default:[]},
    isActive: { type: Boolean, default: true},
    isDeleted: { type: Boolean, default: false}
}, options);

const ProductDetails = mongoose.model('ProductDetails', ProductDetailsSchema);

module.exports = ProductDetails;