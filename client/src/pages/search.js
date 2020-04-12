import React from "react";
import SearchForm from "../components/search-form";
import BookList from "../components/book-list";
import api from "../utils/api";

class Search extends React.Component {
    state = {
        searchString: "",
        books: []
    };

    handleChange = event => this.setState({ searchString: event.target.value });

    handleSubmit = event => {
        event.preventDefault();

        api.findBooks(this.state.searchString, (err, response) => {
            if (err) {
                return console.error(err);
            }
            console.log(response);
            if (response.data.totalItems > 0) {
                this.setState({ books: response.data.items });
            } else {
                this.setState({ books: [] });
            }
        });
    };

    handleSaveButtonClick = event => {
        event.preventDefault();
        const bookId = event.target.getAttribute("bookId");
    };

    render() {
        return (
            <div className="container">
                <h2>Search</h2>
                <SearchForm
                    searchString={this.state.searchString}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <br />
                <h3>Results</h3>
                <p>Click on a book's title to view it on Google Books. Click the + (plus) icon to add the book to your saved books.</p>
                <BookList
                    books={this.state.books}
                    handleSaveButtonClick={this.handleSaveButtonClick}
                />
            </div>
        )
    }
}

export default Search;
