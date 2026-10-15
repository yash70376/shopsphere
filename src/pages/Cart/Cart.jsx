
import "./Cart.css";

import CartItem from "../../components/CartItem/CartItem";
import { useCart } from "../../context/CartContext";

function Cart() {
    // NEW FUNCTIONALITY: Shared cart ka actual data lena
    const { cartItems } = useCart();

    return (
        <main className="cart-page">

            <div className="cart-header">
                <h1>Your Cart</h1>
                <p>Review your selected products</p>
            </div>

            <div className="cart-content">

                <section className="cart-items-section">

                    <h2>Cart Items</h2>

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map(function(item) {
                            return (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                />
                            );
                        })
                    )}

                </section>

                <aside className="order-summary">
                    <h2>Order Summary</h2>

                    <p>Cart items: {cartItems.length}</p>
                </aside>

            </div>

        </main>
    );
}

export default Cart;
