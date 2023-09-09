const Users = require('../models/Users');
const Posts = require('../models/Posts');
const moment = require('moment');


const fetchPosts = async (arealocation, eventType) => {

    try{  
        if(eventType === 'All'){
            if(arealocation === 'AllCountry'){   
                        var postsVal = await Posts.find({}).populate({
                        path: 'participants',
                        select: ['_id', 'firstname', 'lastname']}) 
                        return postsVal;
                    }
                    else{
                        var postsVal = await Posts.find({arealocation: arealocation}).populate({
                        path: 'participants',
                        select: ['_id', 'firstname', 'lastname']}) 
                        return postsVal;
                    }                 
                }else{
    
                    if(arealocation === 'AllCountry'){   
                        var postsVal = await Posts.find({eventType: eventType}).populate({
                            path: 'participants',
                            select: ['_id', 'firstname', 'lastname']}) 
                            return postsVal;
                    }
                    else{
                        var postsVal = await Posts.find({eventType: eventType, arealocation: arealocation}).populate({
                            path: 'participants',
                            select: ['_id', 'firstname', 'lastname']}) 
                            return postsVal;
                    }                 
                }
       }catch(err){
        console.error('Error:', err);
        res.status(500).json(err);
    }
}


module.exports = {
    sortPosts: async (req, res) =>{

        const arealocation= req.body.arealocation;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const eventType = req.body.eventType;

        try{

       if(startDate && endDate)
        {     
            const posts = await fetchPosts(arealocation, eventType);

            const filteredPosts = posts.filter((post) => {
                const postStartDate = moment(post.startDate, 'YYYY-MM-DD');
                const postEndDate = moment(post.endDate, 'YYYY-MM-DD');
                return postStartDate.isBetween(startDate, endDate) && postEndDate.isBetween(startDate, endDate);
              });

            console.log('filteredPosts', filteredPosts)
            return res.status(200).json(filteredPosts);  

        }else if(startDate){

            const posts = await fetchPosts(arealocation, eventType);

            const filteredPosts = posts.filter((post) => {
                const postDateTime = moment(post.startDate, 'YYYY-MM-DD');
                return postDateTime.isSameOrAfter(startDate);
              });

            console.log('filteredPosts', filteredPosts)
            return res.status(200).json(filteredPosts);  
            
        }else if(endDate){

            const posts = await fetchPosts(arealocation, eventType);   

            const filteredPosts = posts.filter((post) => {
                const postDateTime = moment(post.endDate, 'YYYY-MM-DD');
                return postDateTime.isSameOrBefore(endDate);
              });

            console.log('filteredPostsBefore', filteredPosts)
            return res.status(200).json(filteredPosts); 
        }
        else{

            const filteredPosts = await fetchPosts(arealocation, eventType);
            return res.status(200).json(filteredPosts); 
        }
        }catch(err){
            console.error('Error:', err);
            res.status(500).json(err);
        }
    }
}