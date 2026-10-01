import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-column">
                    <h2>ShopSphere</h2>
                    <p>
                        Discover quality products at great prices.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Shop</h3>
                    <a href="#">All Products</a>
                    <a href="#">Categories</a>
                    <a href="#">Featured</a>
                </div>

                <div className="footer-column">
                    <h3>Account</h3>
                    <a href="#">Login</a>
                    <a href="#">Signup</a>
                    <a href="#">My Orders</a>
                </div>

                <div className="footer-column">
                    <h3>Support</h3>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#">Help</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 ShopSphere. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;