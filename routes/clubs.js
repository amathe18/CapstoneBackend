import express from 'express'
import clubs from '../models/clubs.js';


const router = express.Router()

router.get("/", async (req, res) => {
	console.log('yo');
	
	try {
		const clubs = await Club.find()
		res.json(clubs)
	} catch (err) {
		console.log(err);
		res.send("error");
	}
})

router.post('/', async (req, res, next) => {
	console.log(club);
	

})

router.delete('/', (req, res, next) => {
	console.log();
	
	
})

export default router