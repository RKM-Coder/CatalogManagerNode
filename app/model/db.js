'use strict';
const mongoose = require('mongoose');
const config = require('config');
const dbURL = config.get('db.uri');



async function connectToDb() {
    try {
        await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log('Succefully Connected To DB');
    } catch(error) {
        console.log("db connection error: ",error);
        process.exit(1);
        // throw error;
    }
}

connectToDb();

const db = mongoose.connection;

module.exports = db;