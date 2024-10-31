import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import clubsRouter from './routes/clubs.js'
import cors from 'cors'

const app = express()
const PORT = 3000
dotenv.config()
//const clubs = []



try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log('here is db');
    
} catch (error) {
    console.log(error);
    
    
}
//middleware
app.use(cors());
app.use(express.json());

app.use('/api/clubs', clubsRouter)

// app.get('/',(req, res)=> {
//     res.json("welcome to my api") 
// })


// app.get('/api/clubs', async(req, res) => {
//     try {
//         const clubs = await Club.find({});
//         res.json(clubs);
//     }catch (error){
//         res.json({message: error.message})
//     }



// app.post('/api/clubs', async (req, res) => {
//     try {
//         const club = await Club.create(req.body);
//         res.json(club);
//     } catch(error) {
//         res.json({message: error.message});
//     }
// });    

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
    
})