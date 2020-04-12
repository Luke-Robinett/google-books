import React from "react";
import SearchForm from "../components/search-form";
import SearchResults from "../components/search-results";
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

    render() {
        return (
            <div>
                <h2>Search</h2>
                <SearchForm
                    searchString={this.state.searchString}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <hr />
                <h3>Results</h3>
                <SearchResults results={this.state.books} />
            </div>
        )
    }
}

export default Search;
