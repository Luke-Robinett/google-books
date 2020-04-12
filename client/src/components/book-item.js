import React from "react";
import SaveButton from "./save-button";

function BookItem(props) {
    // Need to account for missing array fields in the book object
    props.book.imageLinks = !props.book.imageLinks ? [] : props.book.imageLinks;
    props.book.authors = !props.book.authors ? [] : props.book.authors;
    return (
        < div className="row my-3">
            <div className="col-12 col-md-4 col-lg-2">
                <a href={props.book.infoLink} target="about:blank">
                    <img src={props.book.imageLinks.thumbnail} alt={props.book.title} />
                </a>
            </div>
            <div className="col">
                <a href={props.book.infoLink} target="about:blank">
                    <h3>{props.book.title}</h3>
                    <h4>{props.book.subtitle}</h4>
                </a>
                <SaveButton
                    bookId={props.bookId}
                    handleClick={props.handleSaveButtonClick}
                />
                <p><strong>{props.book.authors.toString()}</strong></p>
                <p>{props.book.description}</p>
            </div >
        </div >
    )
}

export default BookItem;
