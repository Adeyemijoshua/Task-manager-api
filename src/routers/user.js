const express = require('express');
const router = new express.Router();
const User = require('../models/user')

router.post('/users',async (req,res)=>{
    const user = new User(req.body)
   try{
      await user.save()
      res.status(201).send(user)
   }
   catch(err){
    res.status(400).send(err)
   }
})
///////////////////////////
router.post('/users/login',async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        res.send(user)
    }
    catch(err){
        res.status(400).send(err)
    }
})
///////////////////////////
router.get('/users', async (req, res)=>{

    try{
        const users = await User.find({})
        res.status(200).send(users)
    }
    catch(err){
        await res.status(500).send(err)
    }
})
/////////////////////////
router.get('/users/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(err){
        res.status(500).send()
    }
})
router.patch('/users/:id',async(req,res)=>{
/////////////////////////////////////
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidoperation = updates.every((update)=> allowedUpdates.includes(update))
    if (!isValidoperation){
       return res.status(400).send({error:'invalid updates!'}) 
    }
////////////////////////////////////
    try{
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])

        await user.save()
        // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(err){
        res.status(400).send(err)
    }
})
router.delete('/users/:id', async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user )
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router 