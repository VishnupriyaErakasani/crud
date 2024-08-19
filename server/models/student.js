const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    year:
   {
    type:Number,
    required:true
   },
   age:
   {
    type:Number,
    required:true
   }
})

module.exports = mongoose.model('Student',studentSchema)












