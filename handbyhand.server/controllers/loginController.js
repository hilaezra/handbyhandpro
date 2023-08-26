const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;

module.exports = {
  login: async (req, res) => {

    console.log("login process starts");

    try {
      // Get user input
      const { username, password } = req.body;

      // Validate if user exist in our database
      const user = await Users.findOne({toLowerCase(){username}, password});

        if (user) {
          console.log("user",user.firstname, "login :)");
          /////
          // Generate JWT token
          const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
          console.log(token);
          res.json({ token });
          /////
          //return res.status(200).json(user);
        }else {
          console.log("Unregistered user, please sign up");
          return res.status(400).json({ error: "Unregistered user, please sign up"});
        }   
    } catch (err) {
      console.log(err);
      return res.status(500).json({ 'message': err.message });
    }
  },
};
