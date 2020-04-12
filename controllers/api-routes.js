const express = require("express");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book");

router.use(cors());

// Start mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// API Routes

router.post("/api/books", (req, res) => {
    const { book } = req.body;
    console.log(JSON.stringify(book));
    res.send(`Saved book with title of ${book.volumeInfo.title}`);
});

router.get("/api", (req, res) => res.json({ message: "API is up and running, captain!" }));

// Route for React app
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
