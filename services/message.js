const messages = require('./dataMessages');

function findMessage(id){
	const err = null;
	if (typeof id === 'undefined'){
		err = new Error('id is undefined');
	}

	let index;
	
	const newMessage = messages.find((el, ind) => {
		if (el.id === id){
			index = ind;
			return true;
		} else {
			index = false;
			return false;
		}
	});
	return {newMessage, index, err};
}

module.exports = {
	findAll: (callback) => {
		callback(null, messages);
	},

	findOne: (id, callback) => {
		const {err, newMessage} = findMessage(id);
		callback(err, newMessage);
	},

	add: (message, callback) => {
		
		if (  message.text && message.text.length > 0 && message.senderId && message.receiverId){            
            message.id = messages.length + 1;
            messages.push(message); 
            console.log(`${message.text.length}`);
            console.log(`${message.senderId}`);
            console.log(`${message.receiverId}`);                   
			callback(message);
		
		} else {	
            console.log(`${message.text.length}`);
            console.log(`${message.senderId}`);
            console.log(`${message.receiverId}`);		
			callback(new Error('You dont add empty message'));
		}
	},

	findOneAndDelete: (id, callback) => {
		let {err, newMessage, index} = findMessage(id);
		if (typeof index !== 'undefined'){
			messages.splice(index, 1);
		} else {
			err = new Error('no users with such index');
		}
		callback(err);
	},

	findOneAndUpdate: (id, message, callback) => {
		const {err, index} = findMessage(id);
		
		messages[index] = Object.assign(messages[index], message);
		
		callback(err,messages[index]);
	}
};