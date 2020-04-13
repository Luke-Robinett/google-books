import React from "react";
import BookList from "../components/book-list";
import api from "../utils/api";

class Saved extends React.Component {
    state = {
        books: []
    };

    handleDeleteButtonClick = event => {
        event.preventDefault();

        const bookId = event.target.getAttribute("dataid");
        const targetBook = this.state.books.find(book => book.bookId === bookId);
        console.log("Book ID to delete: " + bookId);
        // api.saveBook(targetBook, (err, response) => {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     console.log(response);
        // });
    };

    componentDidMount() {
        api.getSavedBooks((err, response) => {
            if (err) {
                return console.error(err);
            }
            const { data = [] } = response;
            this.setState({ books: data });
            console.log(response);
        });
    }

    render() {
        return (
            <div className="container">
                <h2>My Saved Books</h2>
                <br />
                <p>Click on a book to view it on Google Books. Click the Delete button to remove it from your saved book list.</p>
                <BookList
                    books={this.state.books}
                    handleActionButtonClick={this.handleDeleteButtonClick}
                    actionButtonText="Delete"
                />
            </div>
        )
    }
}

export default Saved;
