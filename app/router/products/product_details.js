'use strict';
const express = require('express');
const router = express.Router();
const { Products } = require('../../controller');
const { ProductSpecification, ProductDetails} = Products;

router.route('/')
.get(async(req, res, next) => {
    try {
        const result = await ProductDetails.getAllProducts();
        res.json({
            status: 1,
            message: "Success",
            data: result
        });
    } catch(err){
        next(err);
    }
})
.post(async(req, res, next) => {
    try {
        let { specifications } = req.body;
        let productResult = await ProductDetails.insertProduct(req.body);
        if (productResult == null || productResult == undefined) {
            res.json({
                status: 0,
                message: "Product Insert Unsuccessfull!!!",
                data: null
            });
            return;
        }
        specifications.productId = productResult._id;
        let specificationResult = await ProductSpecification.insertSpecification(specifications);
        productResult.specifications = specificationResult;
        res.json({
            status: 1,
            message: "Success",
            data: productResult
        });
    } catch(err){
        next(err);
    }
})
.put(async(req, res, next) => {
    try {
        let { specifications } = req.body;
        let productResult = await ProductDetails.updateProduct(req.body);
        if (productResult == null || productResult == undefined) {
            res.json({
                status: 0,
                message: "Product Update Unsuccessfull!!!",
                data: null
            });
            return;
        }
        let specificationResult = await ProductSpecification.updateSpecification(specifications);
        productResult.specifications = specificationResult;
        res.json({
            status: 1,
            message: "Success",
            data: productResult
        });
    } catch(err){
        next(err);
    }
});



module.exports = router;