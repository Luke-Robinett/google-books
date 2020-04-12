import React from "react";

function SearchResults(props) {
    return (
        <ul>
            {props.results.map((result, index) => <li key={index}>{result.title}</li>)}
        </ul>
    )
}

export default SearchResults;
