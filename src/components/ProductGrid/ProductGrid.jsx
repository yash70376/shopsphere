
import { memo } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

// NEW FUNCTIONALITY: Parent se products aur callback receive karna
function ProductGrid({ products, onProductSelect }) {
    console.log("ProductGrid rendered");

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
                            onProductSelect={onProductSelect}
                        />
                    );
                })}
            </div>
        </section>
    );
}

// NEW FUNCTIONALITY: Props unchanged hon toh re-render skip karne ki koshish
export default memo(ProductGrid);
