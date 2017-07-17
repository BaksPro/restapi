const user = require('./user');
const messages = require('./messages');
const usersCollocutor = require('./usersCollocutor');

module.exports = function(app){
	app.use('/api/users', user);
	app.use('/api/messages', messages);
	app.use('/api/users', usersCollocutor);

};