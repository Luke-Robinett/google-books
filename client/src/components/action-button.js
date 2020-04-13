import React from "react";

function ActionButton(props) {
    const { dataid, handleClick, text } = props;

    return (
        <button
            dataid={dataid}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default ActionButton;