const express = require('express');
const router = express.Router();
const signUpController = require("../../../controllers/signUpController");
const loginController = require("../../../controllers/loginController");
const {authenticateToken } = require("../../../middleware/auth.middleware");

//user login
router.post("/login", loginController.login);

router.route('/logout').post(authenticateToken, (req, res) => {
    console.log(req.body)
    res.cookie("jwt", "")
    return res.status(200).json({ message: "Successful"});
});

//add user after sign up    
router.post("/signup", signUpController.signUp);

module.exports = router;