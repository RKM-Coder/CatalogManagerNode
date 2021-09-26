'use strict';
const { Products } = require('../../model');
const { ProductDetails, ProductSpecification } = Products;


const getAllProducts = async() =>{
    try {
        const result = await ProductDetails.aggregate([{
            $lookup:{
                From: "ProductSpecification",
                localField: "_id",
                foreignField: "productId",
                as: "Product"
            }
        }]);

        return result;
    } catch(err){
        throw err;
    }
};

const getProductsByCategoryAndSubCategory = async (catId, subCatId) => {
    try {
        const result = await ProductDetails.aggregate([{
            $match:{
                categoryId: catId,
                subCategoryId: subCatId
            },
            $lookup:{
                From: "ProductSpecification",
                localField: "_id",
                foreignField: "productId",
                as: "Product"
            }
        }]);

        return result;
    }catch (err) {
        throw err;
    }
};

const getProductsByQuery = async (query) => {
    try {
        const result = await ProductDetails.aggregate([{
            $match: query,
            $lookup:{
                From: "ProductSpecification",
                localField: "_id",
                foreignField: "productId",
                as: "Product"
            }
        }]);

        return result;
    }catch (err) {
        throw err;
    }
};

const insertProduct = async(data) => {
    try {
        const productdata = new ProductDetails(data);
        const result = await productData.save();
        return result;
    } catch(err){
        throw err;
    }
};

const updateProduct = async(data) => {
    try {
        let {_id} = data;
        const result = await ProductDetails.findOneAndUpdate({
            _id
        }, bodyData, {
            new: true
        }).exec();

        return result;
    } catch(err){
        throw err;
    }
}

module.exports = {
    getAllProducts,
    getProductsByQuery,
    getProductsByCategoryAndSubCategory,
    insertProduct,
    updateProduct
}