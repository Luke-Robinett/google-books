import React from "react";
import BookItem from "./book-item";

function BookList(props) {
    if (props.books.length > 0) {
        return (
            <div role="list">
                {
                    props.books.map((book, index) => {
                        return (
                            <div role="listitem" key={index}>
                                <BookItem
                                    book={book.volumeInfo}
                                    bookId={book.id}
                                    handleSaveButtonClick={props.handleSaveButtonClick}
                                />
                                { // Add a separator after all but the final entry in the list
                                    (index < (props.books.length - 1))
                                        ? <hr />
                                        : ""
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <h4>No Books To Display</h4>
        )
    }
}

export default BookList;
