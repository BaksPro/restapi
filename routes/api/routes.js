const user = require('./user');
const messages = require('./messages');

module.exports = function(app){
	app.use('/api/user', user);
	app.use('/api/messages', messages);

};