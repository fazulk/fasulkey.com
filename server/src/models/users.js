const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

// Create the User Directory
const customers = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true,
            index: true
        },
        jobTitle: String,
        gender: String,
        birthDay: Date,
        country: String,
        city: String
    },
    { timestamps: true }
)

// adding third parameter de-pluralizes default mongoose pattern
module.exports = mongoose.model(`customers`, customers)
