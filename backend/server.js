const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo" , (req,res)=>{
    res.status.apply.json({"sucess" : "todo"})
})

app.get("/todos" , (req,res)=>{
    res.status(200).json({"success" : "true"})
})

app.get("/completed" , (req,res)=>{
    res.status(200).json({"success" : "true"})
})

app.get("/", (req,res)=>{
    res.status(200).json({
        "answer" : "sucess"
    })
})

const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`server is running port ${PORT}`)
})