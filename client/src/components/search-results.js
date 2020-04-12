import React from "react";

function SearchResults(props) {
    if (props.results.length > 0) {
        return (
            <ul>
                {
                    props.results.map((result, index) => {
                        return (
                            <li key={index}>{result.volumeInfo.title}</li>
                        )
                    })
                }
            </ul>
        )
    } else {
        return (
            <h4>No Results Found</h4>
        )
    }
}

export default SearchResults;
