import "./OrderDetails.css";

import OrderProduct from "../../components/OrderProduct/OrderProduct";

function OrderDetails() {

    let order = {
        id: "ORD1001",
        date: "12 Sep 2026",
        status: "Delivered",

        products: [
            {
                id: "p1",
                name: "SonicPro Wireless Headphones",
                price: 199.99,
                quantity: 1,
                image:
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
            },
            {
                id: "p2",
                name: "Aura Smartwatch Series 5",
                price: 149.50,
                quantity: 1,
                image:
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
            }
        ],

        shippingAddress: {
            name: "Yash Kumar",
            address: "123 Main Street",
            city: "Agra",
            state: "Uttar Pradesh",
            zip: "282001"
        },

        subtotal: 349.49,
        shipping: 10.00,
        total: 359.49
    };


    return (
        <main className="order-details-page">

            <div className="order-details-header">

                <h1>Order Details</h1>

                <p>
                    Order #{order.id}
                </p>

            </div>


            {/* Order Information */}

            <section className="order-info-card">

                <div>
                    <p className="detail-label">
                        Order Date
                    </p>

                    <p>
                        {order.date}
                    </p>
                </div>


                <div>
                    <p className="detail-label">
                        Status
                    </p>

                    <span className="order-detail-status">
                        {order.status}
                    </span>
                </div>

            </section>


            {/* Products */}

            <section className="details-section">

                <h2>Ordered Products</h2>

                <div className="ordered-products">

                    {order.products.map(function(product) {

                        return (
                            <OrderProduct
                                key={product.id}
                                product={product}
                            />
                        );

                    })}

                </div>

            </section>


            {/* Shipping Address */}

            <section className="details-section">

                <h2>Shipping Address</h2>

                <div className="shipping-address">

                    <h3>
                        {order.shippingAddress.name}
                    </h3>

                    <p>
                        {order.shippingAddress.address}
                    </p>

                    <p>
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state}
                    </p>

                    <p>
                        ZIP Code: {order.shippingAddress.zip}
                    </p>

                </div>

            </section>


            {/* Price Summary */}

            <section className="details-section">

                <h2>Price Summary</h2>

                <div className="price-summary">

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${order.subtotal}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>${order.shipping}</span>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-total">
                        <span>Total</span>
                        <span>${order.total}</span>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default OrderDetails;