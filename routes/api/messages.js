const router = require('express').Router();
const messageService = require('../../services/message');


router.get('/all', (req, res, next) => {
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


router.post('/add', (req, res, next) => {
	let obj = {		
		"senderId": req.body.senderId,
		"receiverId": req.body.receiverId,
		"text": req.body.text
	};
	messageService.add(obj, (err, data) => {
		
		res.end();
	});
});


router.delete('/:id/delete', (req, res, next) => {
	messageService.findOneAndDelete(Number(req.params.id), (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.put('/:id/edit', (req, res, next) => {
	const obj = {			
		"text": req.body.text
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