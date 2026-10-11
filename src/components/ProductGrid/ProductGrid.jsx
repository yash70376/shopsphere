
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

// NEW FUNCTIONALITY: Products parent component se receive karna
function ProductGrid({ products }) {
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
