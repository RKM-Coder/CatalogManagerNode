'use strict';
const { Products } = require('../../model');
const { ProductDetails, ProductSpecification } = Products;

const getAllSpecification = async() => {
    try {
        const result = await ProductSpecification.find({}).exec();
        return result;
    } catch(err){
        throw err;
    }
};

const getSpecificationByProductId = async (productId) => {
    try {
        let query = Object.assign({},{
            productId
        });
        const result = await ProductSpecification.find(query).exec();
        return result;
    } catch(err){
        throw err;
    }
};

const getSpecificationByQuery = async (query) => {
    try {
        const result = await ProductSpecification.find(query).exec();
        return result;
    } catch(err){
        throw err;
    }
};

const insertSpecification = async (data) => {
    try {
        const specificationData = new ProductSpecification(data);
        const result = await specificationData.save();
        return result;
    } catch(err){
        throw err;
    }
};

const updateSpecification = async (data) => {
    try {
        let {_id} = data;
        const result = await ProductSpecification.findOneAndUpdate({
            _id
        }, bodyData, {
            new: true
        }).exec();

        return result;
    } catch(err){
        throw err;
    }
};


module.exports = {
    getAllSpecification,
    getSpecificationByProductId,
    getSpecificationByQuery,
    insertSpecification,
    updateSpecification
}