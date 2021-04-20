'use strict';
const express = require('express');
const router = express.Router();
const { Users } = require('../../controller');
const { User } = Users;
const {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByQuery,
  getUserByRoleId,
  insertUser,
  updateUser,
  deleteUser
} = User;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllUsers();
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


router.route('/register')
.get(async(req, res, next)=>{
  try {
    
  } catch (error) {
    next(error);
  }
})
.post(async(req, res, next)=>{
  try {
	  let result = await insertUser(req.body);
	  res.json({
		  statusCode: 1,
		  message: "Success",
		  result: result
	  });
  } catch (error) {
    next(error);
  }
});


router.route('/role/:roleId')
.get(async(req, res, next)=>{
	try {
		let { roleId } = req.params;
		let result = await getUserByRoleId(roleId);
		res.json({
			statusCode: 1,
			message: "Success",
			result: result
		});
	} catch (error) {
	  next(error);
	}
})


router.route('/:userId')
.get(async(req, res, next)=>{
	try {
		let { userId } = req.params;
		let result = await getUserById(userId);
		res.json({
			statusCode: 1,
			message: "Success",
			result: result
		});
	} catch (error) {
	  next(error);
	}
});

router.route('/:userEmail')
.get(async(req, res, next)=>{
	try {
		let { userEmail } = req.params;
		let result = await getUserByEmail(userEmail);
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
