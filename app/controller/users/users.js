'use strict';
const { Users } = require('../../model');
const { User } = Users;

const getAllUsers = async () =>{
    try {
        const result = await User.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        let query = Object.assign({},{
            _id: id
        });
        const result = await User.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getUserByEmail = async (email) =>{
    try {
        let query = Object.assign({},{
            email: email
        });
        const result = await User.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getUserByQuery = async (query) =>{
    try {
        const result = await User.find(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getUserByRoleId = async (roleId) =>{
    try {
        let query = Object.assign({},{
            roleId: roleId
        });
        const result = await User.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const insertUser = async (data) =>{
    try {
        const usersdata = new User(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateUser = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await User.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteUser = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await User.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByQuery,
    getUserByRoleId,
    insertUser,
    updateUser,
    deleteUser
}