const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define book schema
const BookSchema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
});

// Create book model from schema
const Book = mongoose.model("Book", BookSchema);

// Export Book model
module.exports = Book;
