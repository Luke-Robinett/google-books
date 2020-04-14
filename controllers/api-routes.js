const express = require("express");
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book");

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

// Get all saved books
router.get("/api/books", (req, res) => {
    Book.find()
        .then(response => res.json(response))
        .catch(error => res.json(error));
});

// Delete a saved book
router.delete("/api/books/:id", (req, res) => {
    const { id } = req.params;

    Book.deleteOne({ bookId: id })
        .then(response => res.json(response))
        .catch(error => res.json(error));
});

// Route for React app
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
