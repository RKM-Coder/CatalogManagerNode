'use strict';
const { Master } = require('../../model');
const { Region } = Master;

const getAllRegions = async () =>{
    try {
        const result = await Region.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getRegionById = async (id) => {
    try {
        let query = Object.assign({},{
            _id: id
        });
        const result = await Region.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getRegionByName = async (name) =>{
    try {
        let query = Object.assign({},{
            name: name
        });
        const result = await Region.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getRegionByQuery = async (query) =>{
    try {
        const result = await Region.find(query);
        return result;
    } catch(error) {
        throw error;
    }
};


const insertRegion = async (data) =>{
    try {
        const usersdata = new Region(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateRegion = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await Region.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteRegion = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await Region.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllRegions,
    getRegionById,
    getRegionByQuery,
    getRegionByName,
    insertRegion,
    updateRegion,
    deleteRegion
}