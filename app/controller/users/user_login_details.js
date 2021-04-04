'use strict';
const { Users } = require('../../model');
const { UserLoginDetails } = Users;

const getAllLoginDetails = async () =>{
    try {
        const result = await UserLoginDetails.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getLoginByUserId = async (id) => {
    try {
        let query = Object.assign({},{
            userId: id
        });
        const result = await UserLoginDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getLoginByDistributorId = async (distributorId) =>{
    try {
        let query = Object.assign({},{
            distributor_id: distributorId
        });
        const result = await UserLoginDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getLoginByQuery = async (query) =>{
    try {
        const result = await UserLoginDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const insertUserLogin = async (data) =>{
    try {
        const usersdata = new UserLoginDetails(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateUserLogin = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await UserLoginDetails.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteUserLogin = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await UserLoginDetails.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllLoginDetails,
    getLoginByUserId,
    getLoginByDistributorId,
    getLoginByQuery,
    insertUserLogin,
    updateUserLogin,
    deleteUserLogin
}