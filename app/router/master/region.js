'use strict';
const express = require('express');
const router = express.Router();
const { Master } = require('../../controller');
const { Region } = Master;
const {
    getAllRegions,
    getRegionById,
    getRegionByQuery,
    getRegionByName,
    insertRegion,
    updateRegion,
    deleteRegion
} = Region;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllRegions();
	  res.json({
		  statusCode: 1,
		  message: "Success",
		  result: result
		});
  } catch (error) {
    next(error);
  }
})
.post(async(req, res, next)=>{
  try {
    
  } catch (error) {
    next(error);
  }
})
.delete(async(req, res, next)=>{
  try {
    
  } catch (error) {
    next(error);
  }
})
.put(async(req, res, next)=>{
  try {
    
  } catch (error) {
    next(error);
  }
});


module.exports = router;