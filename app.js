const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})


app.use('/api/v1/tasks', tasks)


//as the frontend is able to add, edit, remove the tasks we are setting up following routes
//app.get('/api/v1/tasks')               -to get all the tasks
//app.post('/api/v1/tasks')              -to create a new task
//app.get('/api/v1/tasks/:id')           -to get a single task
//app.patch('/api/v1/tasks/:id')         -to update the given task task
//app.delete('/api/v1/tasks/:id')        -to delete a task
//we are using api setup of Hacker News





const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>
        console.log(`Server is listening on port ${port}`))
    }
    catch(error){
        console.log(error)
    }
}

start()