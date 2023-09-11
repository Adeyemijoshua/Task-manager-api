const express = require('express')
const Task = require('../models/task')
const router = new express.Router();


router.post('/tasks',async (req, res)=>{
    const tasks = new Task(req.body)
    try{
        await tasks.save()
        res.status(201).send(tasks)
    }catch(err){
        res.status(400).send(err)
    }
})
//////////////////
router.get('/tasks',async (req, res)=>{

    try {
        const tasks = await  Task.find({})
        res.status(200).send(tasks)
    }catch(err){
        res.status(500).send(err)
    }
})
/////////////////////////
router.get('/tasks/:id',async (req, res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(err){
        res.status(500).send()
    }
})

router.patch('/tasks/:id',async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'description']
    const isValidoperation = updates.every((update)=> allowedUpdates.includes(update))
    if (!isValidoperation){
       return res.status(400).send({error:'invalid updates!'}) 
    }
    try{
        const task =await Task.findById(req.params.id)

        updates.forEach((update)=>task[update]=req.body[update])

        await task.save()
        // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(err){
        res.status(400).send(err)
    }
})
router.delete('/tasks/:id', async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router 