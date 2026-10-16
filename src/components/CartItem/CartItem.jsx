
import "./CartItem.css";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {

    // NEW FUNCTIONALITY: Shared cart se remove function lena
    const { removeFromCart } = useCart();

    return (
        <div className="cart-item">

            <div className="cart-item-image">
                <img
                    src={item.image}
                    alt={item.name}
                />
            </div>

            <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p className="cart-item-category">
                    {item.category}
                </p>

                <p className="cart-item-price">
                    ${item.price}
                </p>

                <div className="cart-item-actions">

                    <div className="cart-quantity">
                        <button>−</button>
                        <span>{item.quantity}</span>
                        <button>+</button>
                    </div>

                    {/* NEW FUNCTIONALITY: Product ko cart se remove karna */}
                    <button
                        className="remove-button"
                        onClick={function() {
                            removeFromCart(item.id);
                        }}
                    >
                        Remove
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CartItem;
