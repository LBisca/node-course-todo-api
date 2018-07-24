var mongoose = require('mongoose')

var User = mongoose.model('User', {
    userName: {
        type: String,
        required: false,
        minlength: 4,
        trim: true
    },
    email: {
        type: String,
        trim:true,
        minlength: 1,
        required: false
    },
    password: {
        type: String,
        required: false,
        minlength: 6,
        trim: true
    }
})

module.exports = {User}