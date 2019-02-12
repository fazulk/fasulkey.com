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

const model = mongoose.model(`users`, users)

export default model
