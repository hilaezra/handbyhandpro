const express = require('express');
const router = express.Router();
const createPostController = require("../../../controllers/createPostController");
const postController = require("../../../controllers/postController");
const {authenticateToken } = require("../../../middleware/auth.middleware");

router.route('/getAllPosts').get(createPostController.getAllPosts);

router.route('/getSocialPosts').get(createPostController.getSocialPosts);

router.route('/getVolunteerPosts').get(createPostController.getVolunteerPosts);

router.route('/getContributionPosts').get(createPostController.getContributionPosts);

router.route('/createevent').post(authenticateToken, createPostController.createPost);

router.route('/participants').post(authenticateToken, postController.getParticipants);

router.route('/participate').post(authenticateToken, postController.addParticipant);

router.route('/cancelParticipation').post(authenticateToken, postController.removeParticipant);

module.exports = router;