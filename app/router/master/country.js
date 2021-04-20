'use strict';
const express = require('express');
const router = express.Router();
const { Master } = require('../../controller');
const { Country } = Master;
const {
    getAllCountries,
    getCountryById,
    getCountryByName,
    getCountryByQuery,
    insertCountry,
    updateCountry,
    deleteCountry
} = Country;

router.route('/')
.get(async(req, res, next)=>{
  try {
	  let result = await getAllCountries();
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
      let { regionId } = req.body;
      let query = Object.assign({},{
        regionID: regionId
      });
      let result = await getCountryByQuery(query);
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


module.exports = router;