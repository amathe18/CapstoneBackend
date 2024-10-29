import express from 'express'
import Club from '../models/clubs.js';

const router = express.Router()

router.get("/", async (req, res) => {
	console.log(req.clubs);
	try {
		const clubs = await Club.find()
		res.json(clubs)
	} catch (err) {
		console.log(err);
		res.send("error");
	}
})

router.post('/', async (req, res, next) => {
	console.log(clubs);
	

})

router.delete('/', (req, res, next) => {
	
})

export default router