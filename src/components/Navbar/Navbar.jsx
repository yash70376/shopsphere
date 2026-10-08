import { useContext } from "react";

import "./Navbar.css";

import AuthContext from "../../context/AuthContext";

function Navbar() {

    // NEW FUNCTIONALITY: Context se authentication data lena
    const { user, isLoggedIn, login, logout } = useContext(AuthContext);

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

                {/* NEW FUNCTIONALITY: Login status ke according UI */}
                {isLoggedIn ? (
                    <>
                        <span>
                            👤 {user.name}
                        </span>

                        <button onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button onClick={login}>
                        Login
                    </button>
                )}

                <span>🛒</span>
            </div>

        </nav>
    );
}

export default Navbar;