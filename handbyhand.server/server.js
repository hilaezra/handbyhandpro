const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const authenticationRoutes = require("./src/api/auth/auth.routes")

const app = express()
const port = 3000

// Connect to DB

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded{})

// App routes
app.use("/auth", authenticationRoutes)
// app.use("/post", postsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})