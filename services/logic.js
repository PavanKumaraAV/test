var db = require('./db')

register = async (firstName, lastName, address, email, mobile, dob, gender, course) => {
    
    const result = await db.Studentdetail.findOne({
        mobile
    })
    if (result) {
        return {
            message: "user exist",
            statusCode: 404
        }
    }
    else {
        newStudent = new db.Studentdetail({
            firstName, lastName, address, email, mobile, dob, gender, course
        })
        newStudent.save()
        return {
            message: "registration succesfull",
            statusCode: 200,
            firstName: result.firstName,
            lastName: result.lastName,
            address: result.address,
            email: result.email,
            mobile: result.mobile,
            dob: result.dob,
            gender: result.gender,
            course: result.course
        }
    }

}

data = async ()=>{
    const result_1 = await db.Studentdetail.find()
    if (result_1) {
        return result_1
    }
    else {
        return {
            statusCode: 404,
            message: "No data found"
        }
    }
}
module.exports = {
    register,
    data
}