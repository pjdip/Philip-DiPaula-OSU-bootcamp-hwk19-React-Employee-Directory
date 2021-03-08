import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
    return (
        <div className="text-center bg-success">
            <h1 style={{ fontSize: 30, color: "white", padding: 19 }}>
                Employee Manager
            </h1>
        </div>
    )
};

export default Header;