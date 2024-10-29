import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import clubsRouter from './routes/clubs.js'
//const express = require('express')
const app = express()
const PORT = 3000
dotenv.config()
const clubs = [
     
]

try {
    mongoose.connect(process.env.MONGODB_URI)
} catch (error) {
    console.log(error);
    
    
}
app.use( '/api/clubs', clubsRouter)

app.get('/',(req, res)=> {
    res.json("welcome to my api") 
})

app.post('/', (req, res) => {
    res.json('post something')
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
    
})