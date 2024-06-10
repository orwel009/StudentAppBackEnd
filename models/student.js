const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "rollNo":String,
        "admNo":String,
        "college":String
    }
)

let studentModel = mongoose.Model("students",schema)
module.exports={studentModel}