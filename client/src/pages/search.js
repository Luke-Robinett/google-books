import React from "react";
import SearchForm from "../components/searchForm";
import SearchResults from "../components/SearchResults";

class Search extends React.Component {
    state = {
        searchString: "",
        results: []
    };

    handleChange = event => this.setState({ searchString: event.target.value });

    handleSubmit = event => {
        event.preventDefault();

        const results = [
            { title: "Oh Yeah" },
            { title: "Something Cool" },
            { title: "Why The Heck Not?" }
        ];

        this.setState({ results: results });
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
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}

export default Search;
