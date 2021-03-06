const router = require('express').Router();
const userService = require('../../services/user');

router.get('/all', (req, res, next) => {
	userService.findAll((err, data) => {
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
	userService.findOne(Number(req.params.id), (err, data) => {
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
	const obj = {
		"id": req.body.id,
		"name": req.body.name,
		 "email": req.body.email 
		
	};
	userService.add(obj, (err, data) => {
		
		res.end();
	});
});


router.delete('/:id/delete', (req, res, next) => {
	userService.findOneAndDelete(Number(req.params.id), (err, data) => {
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
		"name": req.body.name,
		"email": req.body.email
		
	};
	userService.findOneAndUpdate(Number(req.params.id), obj, (err, data) => {
		if (!err){
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
	
});






module.exports = router;