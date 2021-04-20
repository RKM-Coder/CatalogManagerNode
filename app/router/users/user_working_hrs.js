'use strict';
const express = require('express');
const router = express.Router();
const { Users } = require('../../controller');
const { UserWorkingHrs } = Users;
const {
  getAllWorkingHrsDetails,
  getWorkingHrsByUserId,
  getWorkingHrsByDistributorId,
  getWorkingHrsByQuery,
  insertUserWorkingHrs,
  updateUserWorkingHrs,
  deleteUserWorkingHrs
} = UserWorkingHrs;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllWorkingHrsDetails();
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