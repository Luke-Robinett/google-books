import React from "react";
import ActionButton from "./action-button";

function BookItem(props) {
    const {
        book: {
            bookId = "",
            title = "(No Title)",
            subtitle = "",
            authors = [],
            description = "",
            image = "",
            link = ""
        },
        handleActionButtonClick,
        actionButtonText
    } = props;

    return (
        < div className="row my-3">
            <div className="col-12 col-md-4 col-lg-2">
                <a href={link} target="about:blank">
                    <img src={image} alt={title} />
                </a>
            </div>
            <div className="col">
                <a href={link} target="about:blank">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </a>
                <ActionButton
                    dataid={bookId}
                    handleClick={handleActionButtonClick}
                    text={actionButtonText}
                />
                <p><strong>{authors.toString()}</strong></p>
                <p>{description}</p>
            </div >
        </div >
    )
}

export default BookItem;
