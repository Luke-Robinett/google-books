import React from "react";

function SearchForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="searchField">Search: </label>
                <input type="text"
                    id="searchField"
                    value={props.searchString}
                    onChange={props.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;
