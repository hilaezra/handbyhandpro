const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {

    getParticipants: async (req, res) => {
        try {
            const postId = req.body.postId;
            console.log(postId);
            console.log('starting');

            const post = await Posts.findOne({_id: postId}).populate({
                path: 'participants',
                select: ['_id', 'firstname', 'lastname']});

            if (!post) {
              return res.status(404).json({ message: 'Event not found' });
            }

            console.log(post);
            console.log("participants: ")
            console.log(post.participants);
            res.json({ participants: post.participants });
          } catch (error) {
            console.error('Error fetching participants:', error);
            res.status(500).json({ message: 'Error fetching participants' });
          }
    },

    removeParticipant: async (req, res) => {
        const postId = req.body.postId;
        const userId = req.user.userId;

        try {
            const post = await Posts.findByIdAndUpdate(postId,
            { $pull: { participants: userId } },
            { new: true });

            if (!post) {
            return res.status(404).json({ message: 'Event not found' });
            }

            res.json({ message: 'Your participation canceled', post });
        } catch (error) {
            res.status(500).json({ message: 'Error canceling participation' });
        }
    },

    addParticipant: async (req, res) => {
        const postId = req.body.postId;
        const userId = req.user.userId;

        try {
            const post = await Posts.findByIdAndUpdate(postId,
            { $addToSet: { participants: userId } },
            { new: true });

            if (!post) {
            return res.status(404).json({ message: 'Event not found' });
        }
            res.json({ message: 'You participate in the event', post });
        } catch (error) {
            res.status(500).json({ message: 'Error participating in the event' });
        }
    }, 
};