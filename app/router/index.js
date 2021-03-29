'use strict';

const usersRouter = require('./users');

module.exports = app => {
	app.use('/api/user', usersRouter);
};
