const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const cors = require('cors')
const authenticationRoutes = require("./src/api/auth/auth.routes")
const postsRoutes = require("./src/api/auth/post.routes")
const mongoose = require('mongoose');
//const { authMiddleware } = require('./middleware/auth.middleware');
const app = express()
const port = 3000
// const port = process.env.PORT
console.log("port:", port)
app.use(express.json());


// Connect to DB
try{
  mongoose.connect('mongodb://127.0.0.1/test', {
    dbName: 'hand_by_hand_db',
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Connected to hand_by_hand_db database');
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: 'true'
}))
app.use(bodyParser.json())
app.use(cookieParser());
// app.use(bodyParser.urlencoded{})

// App routes
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    // Respond to preflight requests
    res.sendStatus(204);
  } else {
    // Continue processing other requests
    next();
  }
});
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", "true")
//   next();
// });
app.use("/auth", authenticationRoutes)
app.use("/post", postsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})