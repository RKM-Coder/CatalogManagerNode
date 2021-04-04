'use strict';
const { Master } = require('../../model');
const { Country } = Master;

const getAllCountries = async () =>{
    try {
        const result = await Country.find({});
        return result;
    } catch(error) {
        throw error;
    }
};

const getCountryById = async (id) => {
    try {
        let query = Object.assign({},{
            _id: id
        });
        const result = await Country.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getCountryByName = async (name) =>{
    try {
        let query = Object.assign({},{
            name: name
        });
        const result = await Country.findOne(query);
        return result;
    } catch(error) {
        throw error;
    }
};

const getCountryByQuery = async (query) =>{
    try {
        const result = await Country.find(query);
        return result;
    } catch(error) {
        throw error;
    }
};


const insertCountry = async (data) =>{
    try {
        const usersdata = new Country(data);
        const result = await usersdata.save();
        return result;
    } catch(error) {
        throw error;
    }
};

const updateCountry = async (data) =>{
    try {
        const { _id: _id } = data;
        const result = await Country.findOneAndUpdate({ _id }, data, { new: true }).exec();
        return result;
    } catch(error) {
        throw error;
    }
};

const deleteCountry = async (id) =>{
    try {
        let updateData = Object.assign({},{
            $set: {
                isDeleted: true
            }
        })
        const result = await Country.findOneAndUpdate({ _id : id }, updateData, { new: true }).exec();
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByName,
    getCountryByQuery,
    insertCountry,
    updateCountry,
    deleteCountry
}