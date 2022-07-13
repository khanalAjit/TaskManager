//setting up a schema
const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'the name can not be empty'],        //very basic validations 
        trim:true,                  //database ma empty value napathaunako lagi
        maxlength:[30,'your name should not be more than 30 characters']
        
    },
    completed:{
        type:Boolean,
        default:false,
    },
    //only these two properties will be passed into our database
})

module.exports = mongoose.model('Task',taskSchema)