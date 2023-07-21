const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    userId:String,
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const userData = mongoose.model('userDB', userSchema)
module.exports = userData;