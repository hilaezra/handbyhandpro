const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authenticationRoutes = require("./src/api/auth/auth.routes");
const postsRoutes = require("./src/api/auth/post.routes");
const profileRoutes = require("./src/api/profile/profile.routes");
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT;
console.log("port:", port);

app.use(express.json());

// Use the cors middleware
app.use(cors({
  origin: 'http://127.0.0.1:5173', 
  credentials: true
}));

// Other middleware and route definitions ...
app.use("/auth", authenticationRoutes);
app.use("/post", postsRoutes);
app.use("/profile", profileRoutes);

// App routes
app.use((req, res, next) => {
  next();
});

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})