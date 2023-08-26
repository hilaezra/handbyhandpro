const express = require('express');
const router = express.Router();
const createPostController = require("../../../controllers/createPostController");
const {authenticateToken } = require("../../../middleware/auth.middleware");

router.route('/getAllPosts').get(createPostController.getAllPosts);

router.route('/getSocialPosts').get(createPostController.getSocialPosts);

router.route('/getVolunteerPosts').get(createPostController.getVolunteerPosts);

router.route('/getContributionPosts').get(createPostController.getContributionPosts);

router.route('/createevent').post(authenticateToken, createPostController.createPost);

module.exports = router;