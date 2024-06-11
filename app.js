// step 1
const express = require("express")
const monogoos = require("mongoose")
const cors = require("cors")

// step 2
const students = require("./models/student")

// step 3
const {studentModel} = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

monogoos.connect("mongodb+srv://orwel000:orwel123@cluster0.hyugd.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    // console.log(input)
    let student = new studentModel(input)
    // console.log(student)
    student.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    studentModel.find().then(
    (data)=>{
        res.json(data)
    }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("Server Started")
})