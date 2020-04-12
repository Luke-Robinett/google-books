const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book");

// Start mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// API Routes
router.get("/api", (req, res) => res.send("Hello world!"));

module.exports = router;
