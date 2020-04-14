// Used the server.js file provided in the MERN lesson's supplemental materials folder as a starting point for this file
const express = require("express");
const path = require("path");
const router = require("./controllers/api-routes");

// Express configuration
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

// Serve up static assets
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }

// Route for React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
