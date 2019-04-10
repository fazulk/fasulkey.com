import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Create the User Schema.
const users = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

export default mongoose.model(`users`, users)
