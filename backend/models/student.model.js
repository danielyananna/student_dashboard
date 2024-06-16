const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please, enter email"],
        },
        password: {
            type: String,
            required: [true, "Please, enter password"],
        },
        name: {
            type: String,
            required: [true, "Please, enter name"],
        },
        surname: {
            type: String,
            required: [true, "Please, enter surname"],
        },
        age: {
            type: Number,
            required: [true, "Please, enter age"],
        },
        country: {
            type: String
        },
        city: {
            type: String
        },
        createdAt: {
            type: Date, default: Date.now
        },

    },
    {
        timeStamps: true
    }
)

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
