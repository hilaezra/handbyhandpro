const express = require('express');
const Users = require('../../../models/Users');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/login', async (req, res) => {

   try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await Users.findOne({ username });

    if (user && password == user.password) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      // save user token
      user.token = token;

      // user
      return res.status(200).json(user);
    }
    }catch (err) {
        console.log(err);
        res.status(500).json({'message' : err.message });
    }

    return res.status(400).send("Invalid Credentials");

});

router.post('/logout', (req, res) => {
    console.log(req.body)
});

//add user after sign up
router.post("/signup", async  (req, res) => {

    try {
    //Get user input    
    const user = req.body; 
        
    // Validate user input
    if(!user.firstname|| !user.lastname || !user.email || !user.facebookuser || !user.username || !user.password) 
    {
        console.log('not true'); //for checking!
        return res.status(400).json({'message' : 'Missing registration details'});
    } 
    
    // check if user already exist in our database
    const oldUser = await Users.findOne({ email: user.email });
    if (oldUser) {
        console.log("User Already Exist. Please Login");

      return res.status(409).send("User Already Exist. Please Login");
    }

    // check if username already exist in our database
    const inUseUsername = await Users.findOne({ username: user.username });
    if (inUseUsername) {
        console.log("Username Already Exist. Please choose other username");

      return res.status(409).send("Username Already Exist. Please choose other username");
    }

    // Create user in our database
    user.email.toLowerCase();
    const newUser = new Users(user);

    // Create token
    const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );
      // save user token
      user.token = token;

    await newUser.save();

    //res.status(201).json({'success' : 'New user created!' });
    //res.status(201).json(newUser);

    console.log(newUser); //working :) 
    console.log('New user created'); //working :)

    return res.status(200).json(user);

    }catch (err) {
        console.log(err);
        res.status(500).json({'message' : err.message });
    }
});

module.exports = router;