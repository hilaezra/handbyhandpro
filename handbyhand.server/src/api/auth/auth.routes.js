const express = require('express');
//const Users = require('../../../models/Users');
const router = express.Router();
//const jwt = require("jsonwebtoken");
const signUpController = require("../../../controllers/signUpController");
const loginController = require("../../../controllers/loginController");
const { adminAuth, userAuth } = require("./auth.js");

//user login
router.post("/login", loginController.login);

router.route('/logout').post(userAuth, (req, res) => {
    console.log(req.body)
    res.cookie("jwt", "")
    return res.status(200).json({ message: "Successful"});
});

//add user after sign up    
router.post("/signup", signUpController.signUp);

module.exports = router;