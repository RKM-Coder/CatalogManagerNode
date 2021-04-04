'use strict';
const { Master } = require('../../model');
const { Role } = Master;

const getAllRoles = async () =>{
    try {
        const result = await Role.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getRoleById = async (id) => {
    try {
        let query = Object.assign({},{
            _id: id
        });
        const result = await Role.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getRoleByName = async (name) =>{
    try {
        let query = Object.assign({},{
            name: name
        });
        const result = await Role.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getRoleByQuery = async (query) =>{
    try {
        const result = await Role.find(query);
        return result;
    } catch(error) {
        throw error;
    }
};


const insertRole = async (data) =>{
    try {
        const usersdata = new Role(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateRole = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await Role.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteRole = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await Role.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllRoles,
    getRoleById,
    getRoleByName,
    getRoleByQuery,
    insertRole,
    updateRole,
    deleteRole
}