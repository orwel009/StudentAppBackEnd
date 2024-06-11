const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "rollNo":{type:String,required:true},
        "admNo":{type:String,required:true},
        "college":{type:String,required:true}
    }
)

let studentModel = mongoose.model("students",schema)
module.exports={studentModel}