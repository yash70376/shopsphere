import { useContext } from "react";

import "./Navbar.css";

import AuthContext from "../../context/AuthContext";

function Navbar() {

    const user = useContext(AuthContext);

    return (
        <nav className="navbar">

            <div className="logo">
                ShopSphere
            </div>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Categories</a>
                <a href="#">Cart</a>
            </div>

            <div className="nav-icons">
                <span>🔍</span>
                <span>
                    👤 {user.name}
                </span>
                <span>🛒</span>
            </div>

        </nav>
    );
}

export default Navbar;