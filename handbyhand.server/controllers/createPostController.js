const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {
    createPost: async (req, res) => {
        try
        {
            res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173" )
            console.log("firstttttt");

            //Get user input of the event
            const post = req.body;
            console.log("firstttttt");
            console.log(post);

            //Validate event input
            if(!(eventType && eventTitle && content && startDate && startTime && endTime && endDate && location))
            {
                console.log('Missing event details'); //check details!
                return res.status(400).json({'message' : 'Missing event details'});
            }

            const userToken = req.cookies.jwt;
            const author = await Users.findOne({ token: userToken });
            console.log(author);
            if (!author) 
            {
                console.log("Token and author not found in DB!");
                return res.status(409).send("Token and author not found in DB!");
            }
          
            //create new post
            const newPost = new Posts(post);
            newPost.author = author;
            newPost.participants.push(author);
            await newPost.save();
            console.log("secondddddddd");
            console.log(newPost);   //check
            console.log('New post created'); //check

            return res.status(200).json(user);  
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({'message' : err.message });
        }

        return res.status(400).send("Invalid Credentials");
    }
}