import "./OrderCard.css";

function OrderCard({ order }) {

    return (
        <div className="order-card">

            <div className="order-top">

                <div>
                    <p className="order-label">Order ID</p>
                    <h3>{order.id}</h3>
                </div>

                <span className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status}
                </span>

            </div>


            <div className="order-middle">

                <div>
                    <p className="order-label">Order Date</p>
                    <p>{order.date}</p>
                </div>

                <div>
                    <p className="order-label">Products</p>
                    <p>{order.products} Items</p>
                </div>

                <div>
                    <p className="order-label">Total</p>
                    <p className="order-total">
                        ${order.total}
                    </p>
                </div>

            </div>


            <div className="order-bottom">

                <p>
                    {order.productName}
                </p>

                <button>
                    View Details
                </button>

            </div>

        </div>
    );
}

export default OrderCard;