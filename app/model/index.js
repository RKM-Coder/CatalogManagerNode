'use strict';
const Users = require('./users');
const Master = require('./master');
const db = require('./db');
const Products = require('./products');

module.exports = {
    Users,
    Master,
    Products,
    db
}