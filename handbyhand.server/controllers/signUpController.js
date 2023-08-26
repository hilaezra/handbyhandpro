const Users = require('../models/Users');
const jwt = require("jsonwebtoken");
const secretKey = process.env.secretKey;

module.exports = {

    signUp: async (req, res) => {
        try 
        {
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
          const inUseUsername = await Users.findOne({ username: user.username.toLowerCase() });
          if (inUseUsername) {
            console.log("Username Already Exist. Please choose other username");
            return res.status(409).json({ error: "Username Already Exist. Please choose other username"});
          }
        
          // Create user in our database
          user.email = user.email.toLowerCase();
          user.username = user.username.toLowerCase();
          const newUser = new Users(user);  
          newUser.role = "Basic";
          await newUser.save();
          console.log(newUser); 
          console.log('New user created'); 

          // Generate JWT token
          const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
          console.log(token);
          res.json({ token, user });
        }
        catch (err) 
        {
          console.log(err);
          return res.status(500).json({'message' : err.message });
        }
    }
 }