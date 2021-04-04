'use strict';
const { Users } = require('../../model');
const { DeviceDetails } = Users;

const getAllDevices = async () =>{
    try {
        const result = await DeviceDetails.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getDeviceById = async (id) => {
    try {
        let query = Object.assign({},{
            _id: id
        });
        const result = await DeviceDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getDeviceByAppId = async (appID) =>{
    try {
        let query = Object.assign({},{
            appID: appID
        });
        const result = await DeviceDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getDeviceByQuery = async (query) =>{
    try {
        const result = await DeviceDetails.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const insertDevice = async (data) =>{
    try {
        const usersdata = new DeviceDetails(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateDevice = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await DeviceDetails.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteDevice = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await DeviceDetails.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllDevices,
    getDeviceById,
    getDeviceByAppId,
    getDeviceByQuery,
    insertDevice,
    updateDevice,
    deleteDevice
}