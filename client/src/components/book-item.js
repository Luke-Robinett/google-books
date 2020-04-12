import React from "react";

function SearchResult(props) {
    console.log(props.book);

    // Need to account for missing array fields in the book object
    props.book.imageLinks = !props.book.imageLinks ?[]  : props.book.imageLinks;
    props.book.authors = !props.book.authors ? [] : props.book.authors;

    return (
        < div className="row my-3" >
            <div className="col-12 col-md-4 col-lg-2">
                <img src={props.book.imageLinks.thumbnail} alt={props.book.title} />
            </div>
            <div className="col">
                <h3>{props.book.title}</h3>
                <h4>{props.book.subtitle}</h4>
                <strong>{props.book.authors.toString()}</strong>
                <p>{props.book.description}</p>
            </div >
        </div >
    )
}

export default SearchResult;
