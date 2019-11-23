// This is the serve.js page
// Add all the serve configurations here
const express = require("express")
const path = require("path")
// const connectDB = require("./config/db")

const app = express()

// connectDB()

// Init Middlieware
app.use(express.json({ extended: false }))

// app.get('/', (req, res) => res.send('API Running...'));

// Define routes
// app.use("/api/auth", require("./api/auth/auth.router"))
// app.use("/api/profile", require("./api/profile/profile.router"))
// app.use("/api/venue", require("./api/venue/venue.router"))
// app.use("/api/recipe", require("./api/recipe/recipe.router"))
// app.use(
//   "/api/ingredient",
//   require("./api/ingredient/ingredient.router")
// )
// app.use("/api/supplier", require("./api/supplier/supplier.router"))

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "client/build")))

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}...`)
)
