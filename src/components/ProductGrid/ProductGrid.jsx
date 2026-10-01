import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {

    let products = [
        {
            id: "p1",
            name: "SonicPro Wireless Headphones",
            category: "Electronics",
            price: 199.99,
            originalPrice: 249.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
            description: "Experience immersive active noise cancellation with ultra-soft memory foam earcups."
        },
        {
            id: "p2",
            name: "Aura Smartwatch Series 5",
            category: "Accessories",
            price: 149.50,
            originalPrice: 179.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
            description: "Track health metrics, heart rate, sleep quality, and GPS workouts."
        },
        {
            id: "p3",
            name: "Minimalist Leather Sneakers",
            category: "Fashion",
            price: 89.99,
            originalPrice: 110.00,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
            description: "Premium leather sneakers with ergonomic cushioned soles."
        },
        {
            id: "p4",
            name: "Ergonomic Wooden Desk Lamp",
            category: "Home",
            price: 59.99,
            originalPrice: 75.00,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
            description: "Sleek architectural LED desk lamp with adjustable color temperature."
        }
    ];

    return (
        <section className="products-section">

            <div className="products-header">
                <h2>All Products</h2>
                <p>Explore our complete collection</p>
            </div>

            <div className="product-grid">

                {products.map(function(product) {

                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    );

                })}

            </div>

        </section>
    );
}

export default ProductGrid;