'use strict';
const express = require('express');
const router = express.Router();
const { Master } = require('../../controller');
const { Role } = Master;
const {
    getAllRoles,
    getRoleById,
    getRoleByName,
    getRoleByQuery,
    insertRole,
    updateRole,
    deleteRole
} = Role;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllRoles();
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
    let result = await insertRole(req.body);
    res.json({
        statusCode: 1,
        message: "Success",
        result: result
      });
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


router.route('/:id')
.get(async(req, res, next)=>{
  try {
      let { id } = req.params;
	  let result = await getRoleById(id);
	  res.json({
		  statusCode: 1,
		  message: "Success",
		  result: result
		});
  } catch (error) {
    next(error);
  }
});




module.exports = router;