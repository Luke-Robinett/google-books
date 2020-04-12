import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Google Books Search</a>
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/search">Search</a>
                <a className="nav-item nav-link" href="/saved">Saved</a>
            </div>
        </nav>
    )
}

export default Navbar;