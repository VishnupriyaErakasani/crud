const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const studentRouter = require('./routes/students')

//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
// const url = 'mongodb://127.0.0.1:27017/MGIT'
const url = 'mongodb+srv://ekrishnaveni2005:9618346705@crud.qwcb2.mongodb.net/?retryWrites=true&w=majority&appName=crud'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/students',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
