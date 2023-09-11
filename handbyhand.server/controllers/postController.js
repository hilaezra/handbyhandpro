const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {

    getParticipants: async (req, res) => {
        try {
            const postId = req.body.postId;
            console.log('post id: ', postId);
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
            console.log('userId: ', userId)

            const post = await Posts.findById(postId);
            console.log('post: ', post);

            if (!post) {
                return res.status(404).json({ message: 'Event not found' });
            } else if (!post.participants) { // Check if participants array is null or doesn't exist 
                console.log('The participants is null!!!')
                post.set({ participants: [userId] }); // create new array with the first participant
                console.log('new user added!!')
                console.log(post.participants)
            } else if (!post.participants.includes(userId)){//check if userId is not already in the array    
                console.log("adding new user");
                post.participants.push(userId); // Add userId to the participants array
                console.log('participants: ', post.participants);
            } else {//if user is already a participant                
                return res.status(200).json({ message: 'user is already participate the event' });
            }

            console.log('saving update post')    
            const updatedPost = await post.save();
            console.log('Post updated:', updatedPost);
            res.json({ message: 'You participate in the event', post });
        } catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({ message: 'Error participating in the event' });
        }
    }, 

    deletePost: async (req, res) =>{

        const postId = req.body.postId;

        try{
            const post = await Posts.findByIdAndRemove(postId);
            if (!post){
                return res.status(404).json({ message: 'Event not found' });  
            } 

            res.status(200).json({ message: 'Post deleted successfully' });

        }catch (error) {
            console.error('Error delete post:', error);
            res.status(500).json({ message: 'Error delete post' });
        }

    },
};