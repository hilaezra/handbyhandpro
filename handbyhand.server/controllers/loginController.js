const Users = require('../models/Users');
const jwt = require("jsonwebtoken");
const express = require('express');

module.exports = {
    login: async (req, res) => {
        try {
            const maxAge = 3 * 60 * 60;  
            // Get user input
            const { username, password } = req.body;
        
            // Validate user input
            if (!(username && password)) {
              return res.status(400).send("All input is required");
            }
            // Validate if user exist in our database
            const user = await Users.findOne({ username });
        
            if (user && password == user.password) {
              // Create token
              const token = jwt.sign(
                { user_id: user._id, email: user.email, role: user.role },
                    process.env.TOKEN_KEY,
                {
                  expiresIn: maxAge,
                }
              );
        
              // save user token
              user.token = token;
              res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge * 1000, // 3hrs in ms
              });

              console.log("user login:)");

              return res.status(200).json(user);
            }
            }catch (err) {
                console.log(err);
                return res.status(500).json({'message' : err.message });
            }
        
            return res.status(400).send("Invalid Credentials");
    }
 }