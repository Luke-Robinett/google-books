import React from "react";
import BookItem from "./book-item";

function BookList(props) {
    const {
        books = [],
        handleActionButtonClick = null,
        actionButtonText = ""
    } = props;

    if (books.length > 0) {
        return (
            <div role="list">
                {
                    books.map((book, index) => {
                        return (
                            <div role="listitem" key={index}>
                                <BookItem
                                    book={book}
                                    handleActionButtonClick={handleActionButtonClick}
                                    actionButtonText={actionButtonText}
                                />
                                { // Add a separator after all but the final entry in the list
                                    (index < (books.length - 1))
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
