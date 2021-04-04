'use strict';
const { Users } = require('../../model');
const { UserLocationDetails } = Users;

const getAllLocationDetails = async () =>{
    try {
        const result = await UserLocationDetails.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getLocationByUserId = async (id) => {
    try {
        let query = Object.assign({},{
            userId: id
        });
        const result = await UserLocationDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getLocationByDistributorId = async (distributorId) =>{
    try {
        let query = Object.assign({},{
            distributor_id: distributorId
        });
        const result = await UserLocationDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getLocationByQuery = async (query) =>{
    try {
        const result = await UserLocationDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const insertUserLocation = async (data) =>{
    try {
        const usersdata = new UserLocationDetails(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateUserLocation = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await UserLocationDetails.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteUserLocation = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await UserLocationDetails.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllLocationDetails,
    getLocationByUserId,
    getLocationByDistributorId,
    getLocationByQuery,
    insertUserLocation,
    updateUserLocation,
    deleteUserLocation
}