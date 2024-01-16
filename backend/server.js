const express = require("express");
const { connectDB } = require("./database/db");
const Todo = require("./models/todoModel");
const app = express();

app.use(express.json());

//connecting db
connectDB();

app.post("/todo" , async (req,res)=>{

    try {
        const savedTodo = await Todo.create(req.body);
        res.status(201).json(savedTodo);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error : ' , error);
      }

})

app.get("/todos" , async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error : ' , error );
    }
})

app.put("/completed" , async (req,res)=>{
   try{
        const updatedTodo = await Todo.updateOne({
            _id:req.body.id
        },{completed : true})
        res.status(200).json({
            "success" : true,
            updatedTodo

        })
   }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error : ' , error);
   }

})


app.delete("/delete" , async (req,res)=>{
    try {
        const deletedTodo = await Todo.deleteOne({ _id: req.body.id });
        res.status(200).json({
            "message" : "todo deleted successfully",
            deletedTodo
        });
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
 } )


const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`server is running port ${PORT}`)
})