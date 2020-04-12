import React from "react";
import SearchResult from "./search-result";

function SearchResults(props) {
    if (props.books.length > 0) {
        return (
            <div>
                {
                    props.books.map((book, index) => {
                        return (
                            <SearchResult
                                key={index}
                                book={book.volumeInfo}
                            />
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <h4>No Results Found</h4>
        )
    }
}

export default SearchResults;
