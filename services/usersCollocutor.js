const messages = require('./dataMessages');
const users = require('./dataUsers');



module.exports = {  

getAllCollocutors: (id, callback) => {
		
		let uniqueIndex = [];
		
	
		messages.filter(function(value){
			return value.senderId === id;
		}).forEach((element)=> {
			if( !uniqueIndex.includes(element.receiverId)){
				uniqueIndex.push(element.receiverId);
			}
		});
		let collocutors = users.filter(function( elem ){
			return uniqueIndex.includes(elem.id)
		})

		
		callback(null, collocutors);
	}
}


