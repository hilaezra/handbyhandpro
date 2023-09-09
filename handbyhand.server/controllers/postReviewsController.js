const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {

    getPostReviews: async (req, res) => {
        try {
            const postId = req.body.postId;
            console.log('post id: ', postId);
            console.log('starting');

            const post = await Posts.findOne({_id: postId}).populate('reviews', 'firstName lastName')

            if (!post) {
              return res.status(404).json({ message: 'Event not found' });
            }

           // console.log(post);
            //console.log("reviews: ")
            console.log(post.reviews);
            res.json({ reviews: post.reviews });
          } catch (error) {
            console.error('Error fetching participants:', error);
            res.status(500).json({ message: 'Error fetching participants' });
          }
    },

    addNewComment: async (req, res) => {
        try {
            const postId = req.body.postId;
            const userFirstName = req.body.newReview.userFirstName;
            const userLastName = req.body.newReview.userLastName; 
            const text = req.body.newReview.text;
            const dateAndTime = req.body.newReview.dateAndTime;
            
            // find the post by its postId
            const post = await Posts.findById(postId);

            if (!post){
                return res.status(404).json({ message: 'Event not found' });  
            } 
            else if (!post.reviews){
                console.log(' post.reviews is null');
                post.reviews = []; // If the reviews array is null or undefined- initialize it as an empty array
            }

            // Add the new comment to the reviews array
            post.reviews.push({
            dateAndTime:dateAndTime,
            userFirstName: userFirstName,
            userLastName: userLastName,
            text: text,});

            const updatedPost = await post.save(); //Save the updated post in db

            //console.log(updatedPost);
            console.log("reviews: ")
            console.log(updatedPost.reviews);
            res.json({ reviews: updatedPost.reviews });
          } catch (error) {
            console.error('Error fetching reviews:', error);
            res.status(500).json({ message: 'Error fetching participants' });
          }
    },

    deleteComment: async (req, res) => {
        const postId = req.body.postId;
        const reviewId = req.body.commentId;

        try{
            const post = await Posts.findById(postId);
            if (!post){
                return res.status(404).json({ message: 'Event not found' });  
            } 

            const comment = post.reviews.find((review) => review._id.toString() === reviewId);

            console.log('comment')
            console.log(comment)

            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }

            post.reviews.pull({ _id: reviewId });
            await post.save();

            res.status(200).json({ message: 'Comment deleted successfully', reviews: post.reviews });

        }catch (error) {
            console.error('Error fetching reviews:', error);
            res.status(500).json({ message: 'Error fetching participants' });
        }
    },
}