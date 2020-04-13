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
    let { book } = req.body;
    
    const newBook = new Book();

    newBook.title = book.volumeInfo.title;
    newBook.authors = book.volumeInfo.authors;
    newBook.description = book.volumeInfo.description;
    newBook.image = book.volumeInfo.imageLinks.thumbnail;
    newBook.link = book.volumeInfo.infoLink;

    newBook.save()
        .then(response => res.json(response.toJSON()))
        .catch(error => res.json(error));
});

router.get("/api", (req, res) => res.json({ message: "API is up and running, captain!" }));

// Route for React app
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
