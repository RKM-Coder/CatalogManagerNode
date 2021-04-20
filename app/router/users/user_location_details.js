'use strict';
const express = require('express');
const router = express.Router();
const { Users } = require('../../controller');
const { UserLocationDetails } = Users;
const {
    getAllLocationDetails,
    getLocationByUserId,
    getLocationByDistributorId,
    getLocationByQuery,
    insertUserLocation,
    updateUserLocation,
    deleteUserLocation
} = UserLocationDetails;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllLocationDetails();
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