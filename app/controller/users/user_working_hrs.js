'use strict';
const { Users } = require('../../model');
const { UserWorkingHrs } = Users;

const getAllWorkingHrsDetails = async () =>{
    try {
        const result = await UserWorkingHrs.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getWorkingHrsByUserId = async (id) => {
    try {
        let query = Object.assign({},{
            userId: id
        });
        const result = await UserWorkingHrs.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getWorkingHrsByDistributorId = async (distributorId) =>{
    try {
        let query = Object.assign({},{
            distributor_id: distributorId
        });
        const result = await UserWorkingHrs.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getWorkingHrsByQuery = async (query) =>{
    try {
        const result = await UserWorkingHrs.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const insertUserWorkingHrs = async (data) =>{
    try {
        const usersdata = new UserWorkingHrs(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateUserWorkingHrs = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await UserWorkingHrs.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteUserWorkingHrs = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await UserWorkingHrs.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllWorkingHrsDetails,
    getWorkingHrsByUserId,
    getWorkingHrsByDistributorId,
    getWorkingHrsByQuery,
    insertUserWorkingHrs,
    updateUserWorkingHrs,
    deleteUserWorkingHrs
}