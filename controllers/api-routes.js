const express = require("express");
const path = require("path");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book");

router.use(cors());

// Start mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// API Routes

// Save a book from the search results
router.post("/api/books", (req, res) => {
    const { book } = req.body;

    const newBook = new Book(book);

    newBook.save()
        .then(response => res.json(response))
        .catch(error => res.json(error));
});

router.get("/api/books", (req, res) => {
    Book.find()
        .then(response => res.json(response))
        .catch(error => res.json(error));
});

router.get("/api", (req, res) => res.json({ message: "API is up and running, captain!" }));

// Route for React app
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
