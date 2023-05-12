const express = require('express');
const Users = require('../../../models/Users');
const router = express.Router();

router.post('/login', (req, res) => {
    return res.status(200).send(req.body)
});

router.post('/logout', (req, res) => {
    console.log(req.body)
});

//add user after sign up
router.post('/signup', async  (req, res) => {

    const user = req.body; 
    const newUser = new Users(user);

    if(!user.firstname|| !user.lastname || !user.email || !user.facebookuser || !user.username || !user.password) 
       {
        console.log('not true'); //for checking!
        return res.status(400).json({'message' : 'Missing registration details'});
       } 

    try{
        await newUser.save();
        res.status(201).json({'success' : 'New user created!' });
        console.log(newUser);
        console.log('New user created');
    }
    catch(err){
        console.log(err);
        res.status(500).json({'message' : err.message });
    }
});

module.exports = router;