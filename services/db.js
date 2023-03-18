const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/School")

const Studentdetail = mongoose.model('Studentdetail', {

    firstName: String,
    lastName: String,
    address: String,
    email: String,
    mobile: Number,
    dob: String,
    gender: String,
    course: String

})

module.exports = {
    Studentdetail
}