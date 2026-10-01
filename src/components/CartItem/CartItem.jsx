import "./CartItem.css";

function CartItem({ item }) {
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

                    <button className="remove-button">
                        Remove
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CartItem;