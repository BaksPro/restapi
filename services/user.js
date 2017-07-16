const users = [{
	id: 1,
	name: 'Nikolas',
	email: 'nikolas@gmail.com'
},{
	id: 2,
	name: 'Eduard',
	email: 'eduard@gmail.com'
},{
	id: 3,
	name: 'Bohdan',
	email: 'bohdan@gmail.com'
},{
	id: 4,
	name: 'Dima',
	email: 'dima@gmail.com'
}];

function findUser(id){
	const err = null;
	if (typeof id === 'undefined'){
		err = new Error('id is undefined');
	}

	let index;
	
	const newUser = users.find((el, ind) => {
		if (el.id === id){
			index = ind;
			return true;
		} else {
			index = false;
			return false;
		}
	});
	return {newUser, index, err};
}

module.exports = {
	findAll: (callback) => {
		callback(null, users);
	},

	findOne: (id, callback) => {
		const {err, newUser} = findUser(id);
		callback(err, newUser);
	},

	add: (user, callback) => {
		const {err,newUser, index} = findUser(user.id)
		if (typeof user.id !== 'undefined' &&  !index){
			users.push(user);
			console.log("user add");
			console.log(index);
			callback(user);
		} else  if(typeof user.id === 'undefined'){
				console.log('user doesnt have id');
			callback(new Error('user doesnt have id'));
		} else {
			console.log(`user with ${user.id} alredy exist`);
			callback(new Error('user alredy exist'));
		}
	},

	findOneAndDelete: (id, callback) => {
		let {err, user, index} = findUser(id);
		if (typeof index !== 'undefined'){
			users.splice(index, 1);
		} else {
			err = new Error('no users with such index');
		}
		callback(err);
	},

	findOneAndUpdate: (id, user, callback) => {
		const {err, index} = findUser(id);
		users[index] = Object.assign(users[index], user);
		callback(err);
	}
};