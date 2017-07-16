const messages = [{
    "id": 1,
    "senderId": 1,
    "receiverId": 2,
    "text": "lorem upsum 2" 
},
{   
      "id": 2,
    "senderId": 1,
    "receiverId": 3,
    "text": "lorem upsum 3" 
},
{   
      "id": 3,
    "senderId": 2,
    "receiverId": 3,
    "text": "lorem upsum 5" 
},
{     "id": 4,
    "senderId": 1,
    "receiverId": 3,
    "text": "lorem upsum 2" 
},
{      "id": 5,
    "senderId": 3,
    "receiverId": 2,
    "text": "lorem upsum 2" 
},
{      "id": 6,
    "senderId": 4,
    "receiverId": 2,
    "text": "lorem upsum 2" 
},
{      "id": 7,
    "senderId": 1,
    "receiverId": 2,
    "text": "lorem upsum 2" 
},
{   
      "id": 8,
    "senderId": 1,
    "receiverId": 4,
    "text": "lorem upsum 2" 
},
{   
      "id": 9,
    "senderId": 1,
    "receiverId": 4,
    "text": "lorem upsum 2" 
},
{   
      "id": 10,
    "senderId": 1,
    "receiverId": 2,
    "text": "lorem upsum 2" 
},
{         "id": 11,
    "senderId": 1,
    "receiverId": 3,
    "text": "lorem upsum 2" 
},
{
      "id": 12,
    "senderId": 2,
    "receiverId": 1,
    "text": "lorem upsum 2" 
},
{      "id": 13,
    "senderId": 2,
    "receiverId": 4,
    "text": "lorem upsum 2" 
},
{   
      "id": 14,
    "senderId": 3,
    "receiverId": 1,
    "text": "lorem upsum 2" 
},
{   
      "id": 15,
    "senderId": 3,
    "receiverId": 2,
    "text": "lorem upsum 2" 
},
{   
      "id": 16,
    "senderId": 3,
    "receiverId": 4,
    "text": "lorem upsum 2" 
}];

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
		
		if ( message.text.length > 0){
            messages.length;
            message.id = messages.length + 1;
			messages.push(message);
            console.log("message.id");          
			callback(message);
		
		} else {			
			callback(new Error('You dont add empty message'));
		}
	},

	findOneAndDelete: (id, callback) => {
		let {err, newMessage, index} = findMessage(id);
		if (typeof index !== 'undefined'){
			messages.splice(index, 1);
		} else {
			err = new Error('no messages with such index');
		}
		callback(err);
	},

	findOneAndUpdate: (id, message, callback) => {
		const {err, index} = findMessage(id);
		messages[index] = Object.assign(messages[index], message);
		callback(err);
	}
};