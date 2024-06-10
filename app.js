const express = require("express")
const monogoos = require("mongoose")
const cors = require("cors")
const students = require("./models/student")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.post("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})

app.post("/add",(req,res)=>{
    res.send("Add Done")
})

app.listen(8080,()=>{
    console.log("Server Started")
})