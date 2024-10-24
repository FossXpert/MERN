const mongoose = require('mongoose')
var adminSchema = mongoose.Schema({

    isAdmin : {
        type : Boolean,
        default : true
    },
    firstName: { type: String},
    lastName: { type: String},
    email : {type : String},
    userName : {
        type: String,
        unique : false , 
        required : false
    },
    password : {
        type : String,
        required : true
    },
});

const Admin = mongoose.model('SellingCoursesAdmin',adminSchema)
module.exports = Admin
