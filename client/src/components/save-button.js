import React from "react";

function SaveButton(props) {
    return (
        <button
            bookId={props.bookId}
            onClick={props.handleClick}
        >
            Save
        </button>
    )
}

export default SaveButton;