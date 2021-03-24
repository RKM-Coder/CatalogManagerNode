'use strict';

const config = {
    db:{
        uri: ''
    },

    // JWT Secret
    jwt: {
        secret: (process.env.JWT_SECRET || 'test-jwt-secret'),
        tokenExpirePeriod: (60 * 60 * 1) // 1 day
    },

    // Node MAiler
    nodemailer: {
        user: 'example@gmail.com',
        password: 'example'
    },

    // NODE ENV VARIABLES

    PORT: process.env.PORT || 4100,

    IP: '0.0.0.0',

    // Redirection Host Addresses
    HOST_ADDR: {
        ui: 'http://localhost:4200',
        server: 'http://localhost:3000'
    },

};

module.exports = config;