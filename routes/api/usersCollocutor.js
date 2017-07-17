const router = require('express').Router();
const userService = require('../../services/usersCollocutor');
router.get('/:id/collocutors', (req, res, next) => {
	
	userService.getAllCollocutors(Number(req.params.id), (err, data) => {
		if (!err){
			res.data = data;
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

module.exports = router;