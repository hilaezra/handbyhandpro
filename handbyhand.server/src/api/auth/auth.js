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


//Not in use!
exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" })
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          next()
        }
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" })
  }
}

//Not in use!
exports.userAuth = (req, res, next) => {
  console.log("Incoming user authentication attempt")

    const token = req.cookies.jwt
    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        console.log("decodedToken")
        console.log(decodedToken)
        if (err) {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          if (decodedToken.role !== "Basic") {
            return res.status(401).json({ message: "Not authorized" })
          } else {
            next()
          }
        }
      })
    } else {
      return res.status(401).json({ message: "Not authorized, token not available" })}
  } 