const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const authenticationRoutes = require("./src/api/auth/auth.routes")
const mongoose = require('mongoose');

const app = express()
const port = 3000

// Connect to DB
try{
  mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'hand_by_hand_db',
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Connected to yourDB-name database');
} catch (err) {
  console.error(err.message);
  // Exit process with failure
  process.exit(1);
}


app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded{})

// App routes
app.use("/auth", authenticationRoutes)
// app.use("/post", postsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})