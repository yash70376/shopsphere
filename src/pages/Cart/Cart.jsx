import "./Cart.css";

import CartItem from "../../components/CartItem/CartItem";

function Cart() {

    let cartItems = [
        {
            id: "p1",
            name: "SonicPro Wireless Headphones",
            category: "Electronics",
            price: 199.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
        },
        {
            id: "p2",
            name: "Aura Smartwatch Series 5",
            category: "Accessories",
            price: 149.50,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
        }
    ];

    return (
        <main className="cart-page">

            <div className="cart-header">
                <h1>Your Cart</h1>
                <p>Review your selected products</p>
            </div>


            <div className="cart-content">

                <section className="cart-items-section">

                    <h2>Cart Items</h2>

                    {cartItems.map(function(item) {

                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        );

                    })}

                </section>


                <aside className="order-summary">

                    <h2>Order Summary</h2>

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

                    <button className="checkout-button">
                        Proceed to Checkout
                    </button>

                </aside>

            </div>

        </main>
    );
}

export default Cart;