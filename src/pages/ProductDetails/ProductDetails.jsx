import { useState } from "react";
import "./ProductDetails.css";

import ProductCard from "../../components/ProductCard/ProductCard";

function ProductDetails() {

    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartMessage, setCartMessage] = useState("");

    let product = {
        id: "p1",
        name: "SonicPro Wireless Headphones",
        category: "Electronics",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 142,
        stock: 0,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        description:
            "Experience immersive active noise cancellation with ultra-soft memory foam earcups."
    };

    let relatedProducts = [
        {
            id: "p2",
            name: "Aura Smartwatch Series 5",
            category: "Accessories",
            price: 149.50,
            originalPrice: 179.99,
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
            description:
                "Track health metrics, heart rate, sleep quality, and GPS workouts."
        },
        {
            id: "p3",
            name: "Minimalist Leather Sneakers",
            category: "Fashion",
            price: 89.99,
            originalPrice: 110.00,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
            description:
                "Premium leather sneakers with ergonomic cushioned soles."
        },
        {
            id: "p4",
            name: "Ergonomic Wooden Desk Lamp",
            category: "Home",
            price: 59.99,
            originalPrice: 75.00,
            image:
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
            description:
                "Sleek architectural LED desk lamp with adjustable color temperature."
        },
        {
            id: "p5",
            name: "Ultra-Wide Curved Gaming Monitor",
            category: "Electronics",
            price: 429.99,
            originalPrice: 499.99,
            image:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
            description:
                "Ultra-wide curved monitor designed for immersive gaming and productivity."
        }
    ];

    function handleAddToCart() {
        setCartMessage("Product added to cart!");
    }

    function increaseQuantity() {
        if (quantity < product.stock) {
            setQuantity(function(previousQuantity) {
                return previousQuantity + 1;
            });
        }
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(function(previousQuantity) {
                return previousQuantity - 1;
            });
        }
    }

    return (
        <main className="product-details-page">

            <section className="product-details">

                <div className="product-details-image">
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <div className="product-details-info">

                    <p className="details-category">
                        {product.category}
                    </p>

                    <h1>{product.name}</h1>

                    <div className="details-rating">
                        ⭐ {product.rating}
                        <span>{product.reviews} Reviews</span>
                    </div>

                    <div className="details-price">
                        <span className="current-price">
                            ${product.price}
                        </span>

                        <span className="old-price">
                            ${product.originalPrice}
                        </span>
                    </div>

                    <p className="details-description">
                        {product.description}
                    </p>

                    {product.stock > 0 ? (

                        <>
                            <p className="details-stock">
                                Stock:
                                <strong>
                                    {product.stock} available
                                </strong>
                            </p>

                            {/* && : low stock warning */}
                            {product.stock < 5 && (
                                <p className="low-stock-warning">
                                    Only {product.stock} left!
                                </p>
                            )}

                            <div className="details-quantity">

                                <span>Quantity</span>

                                <div className="quantity-box">

                                    <button onClick={decreaseQuantity}>
                                        −
                                    </button>

                                    <span>{quantity}</span>

                                    <button onClick={increaseQuantity}>
                                        +
                                    </button>

                                </div>

                            </div>

                            <button
                                onClick={function() {
                                    setIsFavorite(function(previousFavorite) {
                                        return !previousFavorite;
                                    });
                                }}
                            >
                                {isFavorite
                                    ? "❤️ Remove Favorite"
                                    : "♡ Add to Favorite"}
                            </button>

                            <button
                                className="add-cart-button"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>

                            {/* && : cart success message */}
                            {cartMessage && (
                                <p className="cart-message">
                                    {cartMessage}
                                </p>
                            )}

                        </>

                    ) : (

                        <>
                            <p className="out-of-stock">
                                Out of Stock
                            </p>

                            <button disabled>
                                Out of Stock
                            </button>
                        </>

                    )}

                </div>

            </section>

            <section className="related-products">

                <div className="related-header">
                    <h2>Related Products</h2>

                    <p>
                        You may also like these products
                    </p>
                </div>

                <div className="related-grid">

                    {relatedProducts.map(function(product) {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        );
                    })}

                </div>

            </section>

        </main>
    );
}

export default ProductDetails;