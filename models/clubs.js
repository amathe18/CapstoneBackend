import mongoose from "mongoose";
  
const Schema = mongoose.Schema;

const clubSchema = new Schema ({
    name: String,
    location: String,
    yearsPlayed: Number,
    league:String,
    coach: String,
    
})

const Club = mongoose.model('Club', clubSchema)

export default Club