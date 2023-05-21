const Users = require('../models/Users');
const jwt = require("jsonwebtoken");
const express = require('express');
//const bcrypt = require('bcrypt');

module.exports = {
    signUp: async (req, res) => {
        try 
        {
            const maxAge = 3 * 60 * 60;
            //Get user input    
            const user = req.body;

            // Validate user input
            if(!user.firstname|| !user.lastname || !user.email || !user.facebookuser || !user.username || !user.password || !user.gender || !user.birthday) 
            {
                console.log('Missing registration details'); //for checking!
                return res.status(400).json({ error: "Missing registration details"});
            } 
            
            // check if user already exist in our database
            const oldUser = await Users.findOne({ email: user.email });
            
            if (oldUser) {
              console.log("User Already Exist. Please Login");
              return res.status(409).json({ error:"User Already Exist. Please Login"});}
        
            // check if username already exist in our database
            const inUseUsername = await Users.findOne({ username: user.username });
            if (inUseUsername) {
              console.log("Username Already Exist. Please choose other username");
              return res.status(409).json({ error: "Username Already Exist. Please choose other username"});
            }
        
            // Create user in our database
            user.email.toLowerCase();
            const newUser = new Users(user);
        
            newUser.role = "Basic";
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email: user.email, role: newUser.role },
                process.env.TOKEN_KEY,
                {
                  expiresIn: maxAge,
                });
              
            // save user token
            user.token = token;
            await newUser.save();
            console.log(newUser); //working :) 
            console.log('New user created'); //working :)

            res.cookie("jwt", token, {
              httpOnly: true,
              maxAge: maxAge * 1000, // 3hrs in ms
            });

            return res.status(200).json(user);  
        }
        catch (err) 
        {
                console.log(err);
                return res.status(500).json({'message' : err.message });
        }
    }
 }