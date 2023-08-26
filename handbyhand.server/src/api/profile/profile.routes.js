const express = require('express');
const jwt = require("jsonwebtoken")
const Users = require('../../../models/Users');
const router = express.Router();
const { userAuth } = require("../auth/auth.js");
 
 router.route('/getUser').get( async (req, res) => { 

     try
     {
         const userToken = req.cookies.jwt;
         console.log("user token");
         console.log(userToken);
         const decodedToken = jwt.decode(userToken);
         const user = await Users.findOne({ email: decodedToken.email });
         console.log(user);
         if (!user) 
         {
             console.log("Token and author not found in DB!");
             return res.status(409).send("Token and author not found in DB!");
         }
 
         return res.status(200).json(user);  
     }
     catch(err)
     {
         console.log(err);
         return res.status(500).json({'message' : err.message });
     }
 });
 
 module.exports = router;