import React from "react";

function Header() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "100%", height: "50px", backgroundColor: "lightblue" }}>
            { <style>
                {`
                    a {
                        text-decoration: none;
                        color: aqua;
                        padding: 10px;
                        font-size: 24px;
                        link:bgcolor: lightblue;
                    }
                `}
            </style> }
            <a href="/">Home</a>
            <a href="/profile">Profile</a>
            <a href="/table">Table</a>
            <a href="/account">Account</a>
        </div>
    );
}

export default Header;
