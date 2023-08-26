const jwt = require("jsonwebtoken")
const secretKey = process.env.secretKey; 

exports.authenticateToken = (req, res, next) => {

  const token = req.header('Authorization').replace('Bearer ', '');
  console.log(token); /////

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}