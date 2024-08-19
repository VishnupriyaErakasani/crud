const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const student = await Student.findById(req.params.id)
           res.json(student)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const student = new Student
   ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        year: req.body.year,
        age:req.body.age
    })

    try
   {
        const a1 =  await student.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=> 
{
    try
   {
        const student = await Student.findById(req.params.id) 
        if (!student) return res.status(404).json({message: 'Student not found'});
        await student.deleteOne();
        res.json({message: 'Student Deleted'});  
    }
catch(err)
   {
        res.send('Error')
    }

})
router.patch('/:id',async(req,res)=> 
    {
        try
       {
            const student = await Student.findById(req.params.id) 
            student.sub = req.body.sub
            const a1 = await student.save()
            res.json(a1)   
        }
    catch(err)
       {
            res.send('Error')
        }
    
    })

module.exports = router

