const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {

    getAllPosts: async (req, res) => {
        try { 
            const posts = await Posts.find({}); 
            return res.status(200).json(posts); 
        } 
        catch (err) { 
            res.status(500).json(err);
        }
    },

    getSocialPosts: async (req, res) => {
        try { 
            const posts = await Posts.find({eventType: "Social"}); 
            return res.status(200).json(posts); 
        } 
        catch (err) { 
            res.status(500).json(err);
        }
    },

    getVolunteerPosts: async (req, res)=>{
        try { 
             const posts = await Posts.find({eventType: "Volunteer"}); 
             return res.status(200).json(posts); 
         } 
         catch (err) { 
             res.status(500).json(err);
         }
    },

    getContributionPosts: async (req, res)=>{
        try { 
             const posts = await Posts.find({eventType: "Contribution"}); 
             return res.status(200).json(posts); 
         } 
         catch (err) { 
             res.status(500).json(err);
         }
    },

    createPost: async (req, res) => {
    try
    {
        //Get user input of the event
        const post = req.body;

        //Validate event input
        if(!(post.eventType && post.eventTitle && post.content && post.startDate && post.endDate))
        {
            console.log('Missing event details'); //check details!
            return res.status(400).json({'message' : 'Missing event details'});
        }

        const userId = req.user.userId;/////
        console.log(userId);/////
        const author = await Users.findOne({ _id: userId });
        console.log(author);/////

        if (!author) 
        {
            console.log("Token and author not found in DB!");
            return res.status(409).send("Token and author not found in DB!");
        }
      
        //create new post
        post.authorID = author;
        post.authorName = author.username;
        if(post.AuthorIsParticipant){
            post.participants=author;
        }else{
            post.participants=null;
        }
        post.startDate = new Date(post.startDate);
        post.endDate = new Date(post.endDate);
        post.reviews= null;
        const newPost = new Posts(post);
        await newPost.save();

        console.log(newPost);
        return res.status(200).json(newPost);  
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({'message' : err.message });
    }
    },      
};