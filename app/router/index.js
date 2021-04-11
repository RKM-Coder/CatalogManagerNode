'use strict';
const errorHandlingMiddleware = require('./error-handling-middleware');
const usersRouter = require('./users');

module.exports = app => {
	app.use('/api/user', usersRouter);
	app.use(errorHandlingMiddleware);
};
