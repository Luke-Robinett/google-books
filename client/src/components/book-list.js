import React from "react";
import BookItem from "./book-item";

function BookList(props) {
    if (props.books.length > 0) {
        return (
            <div>
                {
                    props.books.map((book, index) => {
                        return (
                            <BookItem
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
            <h4>No Books To Display</h4>
        )
    }
}

export default BookList;
