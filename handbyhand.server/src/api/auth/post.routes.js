const express = require('express');
const router = express.Router();
const createPostController = require("../../../controllers/createPostController");
const postController = require("../../../controllers/postController");
const postReviewsController = require("../../../controllers/postReviewsController");
const advancesSearchController = require("../../../controllers/advancedSearchController");

const {authenticateToken } = require("../../../middleware/auth.middleware");

router.route('/getAllPosts').get(createPostController.getAllPosts);

router.route('/getSocialPosts').get(createPostController.getSocialPosts);

router.route('/getVolunteerPosts').get(createPostController.getVolunteerPosts);

router.route('/getContributionPosts').get(createPostController.getContributionPosts);

router.route('/createevent').post(authenticateToken, createPostController.createPost);

router.route('/participants').post(authenticateToken, postController.getParticipants);

router.route('/participate').post(authenticateToken, postController.addParticipant);

router.route('/cancelParticipation').post(authenticateToken, postController.removeParticipant);

router.route('/reviews').post(authenticateToken, postReviewsController.getPostReviews);

router.route('/addComment').post(authenticateToken, postReviewsController.addNewComment);

router.route('/deleteComment').post(authenticateToken, postReviewsController.deleteComment);

router.route('/sortedPosts').post(authenticateToken, advancesSearchController.sortPosts);

module.exports = router;