const express = require('express');
const jwt = require("jsonwebtoken")
const Users = require('../../../models/Users');
const Posts = require('../../../models/Posts');
const router = express.Router();
const CreatePostController = require("../../../controllers/createPostController");
const { adminAuth, userAuth } = require("./auth.js");


router.route('/getAllPosts').get(async (req, res)=>{
   try { 
        const posts = await Posts.find({}); 
        return res.status(200).json(posts); 
    } 
    catch (err) { 
        res.status(500).json(err);
    }
})

router.route('/createevent').post(userAuth, async (req, res) => { 

    try
    {
        //Get user input of the event
        const post = req.body;
        console.log("firstttttt");
        console.log(post);

        //Validate event input
        if(!(post.eventType && post.eventTitle && post.content && post.startDate && post.endDate))
        {
            console.log('Missing event details'); //check details!
            return res.status(400).json({'message' : 'Missing event details'});
        }

        const userToken = req.cookies.jwt;
        console.log(userToken);
        const decodedToken = jwt.decode(userToken);
        const author = await Users.findOne({ email: decodedToken.email });
        console.log(author);
        if (!author) 
        {
            console.log("Token and author not found in DB!");
            return res.status(409).send("Token and author not found in DB!");
        }
      
        //create new post
        post.author = author;
        if(post.AuthorIsParticipant == "true"){
            post.participants=author;
        }else{
            post.participants=null;
        }
        post.startDate = new Date(post.startDate);
        post.endDate = new Date(post.endDate);
        post.reviews= null;
        const newPost = new Posts(post);
        await newPost.save();
        console.log("secondddddddd");
        console.log(newPost);   //check
        console.log('New post created'); //check

        return res.status(200).json(newPost);  
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({'message' : err.message });
    }
});

module.exports = router;