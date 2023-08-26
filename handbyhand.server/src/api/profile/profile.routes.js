const express = require('express');
const router = express.Router();
const userProfileController = require("../../../controllers/userProfileController");
const {authenticateToken } = require("../../../middleware/auth.middleware");
 
 router.route('/getUser').get(authenticateToken, userProfileController.getUser);
 
 module.exports = router;