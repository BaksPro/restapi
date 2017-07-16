const router = require('express').Router();
const messageService = require('../../services/message');


router.get('/', (req, res, next) => {
	messageService.findAll((err, data) => {
		if (!err){
			res.data = data;
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.get('/:id', (req, res, next) => {
	messageService.findOne(Number(req.params.id), (err, data) => {
		if (!err){
			res.data = data;
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});


router.post('/', (req, res, next) => {
	let obj = {		
		"senderId": 1,
		"receiverId": 2,
		"text": "lorem upsum 2" 
	};
	messageService.add(obj, (err, data) => {
		
		res.end();
	});
});


router.delete('/:id', (req, res, next) => {
	messageService.findOneAndDelete(Number(req.params.id), (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.put('/:id', (req, res, next) => {
	const obj = {			
		"text": "lorem upsum 2" 
	};
	messageService.findOneAndUpdate(Number(req.params.id), obj, (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
	
});

module.exports = router;