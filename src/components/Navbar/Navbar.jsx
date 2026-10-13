
import { useContext } from "react";

import "./Navbar.css";
import AuthContext from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function Navbar() {
    // Existing functionality: Authentication data
    const { user, isLoggedIn, login, logout } = useContext(AuthContext);

    // NEW FUNCTIONALITY: Shared cart count read karna
    const { cartCount } = useCart();

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

                {/* Existing functionality: Login status ke according UI */}
                {isLoggedIn ? (
                    <>
                        <span>👤 {user.name}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <button onClick={login}>Login</button>
                )}

                {/* NEW FUNCTIONALITY: Shared cart count dikhana */}
                <span>🛒 Cart ({cartCount})</span>
            </div>
        </nav>
    );
}

export default Navbar;
