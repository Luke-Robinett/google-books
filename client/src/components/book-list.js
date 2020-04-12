import React from "react";
import BookItem from "./book-item";

function BookList(props) {
    if (props.books.length > 0) {
        return (
            <div>
                {
                    props.books.map((book, index) => {
                        return (
                            <div>
                                <BookItem
                                    key={index}
                                    book={book.volumeInfo}
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
