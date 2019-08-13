const mongoose = require(`mongoose`)

const Schema = mongoose.Schema

// Create the User Schema.
const users = new Schema(
    {
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
    },
    { timestamps: true }
)

module.exports = mongoose.model(`users`, users)
