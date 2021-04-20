'use strict';
const express = require('express');
const router = express.Router();
const { Users } = require('../../controller');
const { UserLoginDetails } = Users;
const {
    getAllLoginDetails,
    getLoginByUserId,
    getLoginByDistributorId,
    getLoginByQuery,
    insertUserLogin,
    updateUserLogin,
    deleteUserLogin
} = UserLoginDetails;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllLoginDetails();
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