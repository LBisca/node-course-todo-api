var mongoose = require('mongoose')

var Users = mongoose.model('Users', {
    userName: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    email: {
        type: String,
        trim:true,
        minlength: 1,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    }
})

module.exports = {Users}