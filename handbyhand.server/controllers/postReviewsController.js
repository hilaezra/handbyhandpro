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

            console.log(post);
            console.log("reviews: ")
            console.log(post.reviews);
            res.json({ reviews: post.reviews });
          } catch (error) {
            console.error('Error fetching participants:', error);
            res.status(500).json({ message: 'Error fetching participants' });
          }
    },
}