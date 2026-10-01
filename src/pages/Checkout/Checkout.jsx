import "./Checkout.css";

function Checkout() {
    let cartItems = [
        {
            id: "p1",
            name: "SonicPro Wireless Headphones",
            price: 199.99,
            quantity: 1
        },
        {
            id: "p2",
            name: "Aura Smartwatch Series 5",
            price: 149.50,
            quantity: 1
        }
    ];

    return (
        <main className="checkout-page">

            <div className="checkout-header">
                <h1>Checkout</h1>
                <p>Complete your purchase</p>
            </div>

            <div className="checkout-content">

                {/* Shipping Information */}

                <section className="shipping-section">

                    <h2>Shipping Information</h2>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Enter your address"
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>City</label>
                            <input
                                type="text"
                                placeholder="Enter your city"
                            />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                placeholder="Enter your state"
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label>ZIP Code</label>
                        <input
                            type="text"
                            placeholder="Enter ZIP code"
                        />
                    </div>

                </section>


                {/* Order Summary */}

                <aside className="order-summary">

                    <h2>Order Summary</h2>

                    <div className="checkout-products">

                        {cartItems.map(function(item) {

                            return (
                                <div
                                    className="checkout-product"
                                    key={item.id}
                                >

                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>

                                    <span>
                                        ${item.price}
                                    </span>

                                </div>
                            );

                        })}

                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>$349.49</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>$10.00</span>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-total">
                        <span>Total</span>
                        <span>$359.49</span>
                    </div>

                    <button className="place-order-button">
                        Place Order
                    </button>

                </aside>

            </div>

        </main>
    );
}

export default Checkout;