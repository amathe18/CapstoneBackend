import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 12
    },
    email: {
        type: String,
        required: true,

    },

})
export default new mongoose.model('User', userSchema)