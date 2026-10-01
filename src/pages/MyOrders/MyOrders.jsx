import "./MyOrders.css";

import OrderCard from "../../components/OrderCard/OrderCard";

function MyOrders() {

    let orders = [
        {
            id: "ORD1001",
            date: "12 Sep 2026",
            status: "Delivered",
            products: 2,
            total: 359.49,
            productName: "SonicPro Wireless Headphones"
        },
        {
            id: "ORD1002",
            date: "15 Sep 2026",
            status: "Processing",
            products: 1,
            total: 199.99,
            productName: "Aura Smartwatch Series 5"
        }
    ];


    return (
        <main className="my-orders-page">

            <div className="orders-header">
                <h1>My Orders</h1>
                <p>Track and manage your orders</p>
            </div>


            <section className="orders-list">

                {orders.map(function(order) {

                    return (
                        <OrderCard
                            key={order.id}
                            order={order}
                        />
                    );

                })}

            </section>

        </main>
    );
}

export default MyOrders;