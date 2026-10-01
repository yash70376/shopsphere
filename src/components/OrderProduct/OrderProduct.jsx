import "./OrderProduct.css";

function OrderProduct({ product }) {

    return (
        <div className="order-product">

            <div className="order-product-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </div>

            <div className="order-product-info">

                <h3>{product.name}</h3>

                <p>
                    Quantity: {product.quantity}
                </p>

            </div>

            <div className="order-product-price">
                ${product.price}
            </div>

        </div>
    );
}

export default OrderProduct;