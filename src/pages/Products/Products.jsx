
import { useEffect, useMemo, useState } from "react";

import "./Products.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/Pagination/Pagination";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // NEW FUNCTIONALITY: Search text ko parent component mein store karna
    const [search, setSearch] = useState("");

    useEffect(function() {
        console.log("Products page loaded");

        // Existing functionality: Temporary product request simulation
        const timer = setTimeout(function() {
            const productData = [
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

            setProducts(productData);
            setLoading(false);
        }, 1500);

        // Existing functionality: Effect cleanup
        return function() {
            clearTimeout(timer);
        };
    }, []);

    // NEW FUNCTIONALITY: Search ke according products filter karna
    const filteredProducts = useMemo(function() {
        return products.filter(function(product) {
            return product.name
                .toLowerCase()
                .includes(search.toLowerCase());
        });
    }, [products, search]);

    // Existing functionality: Loading UI
    if (loading) {
        return (
            <main className="products-page">
                <h1>Loading products...</h1>
            </main>
        );
    }

    // Existing functionality: Error UI
    if (error) {
        return (
            <main className="products-page">
                <h1>{error}</h1>
            </main>
        );
    }

    // Existing functionality: Empty product list
    if (products.length === 0) {
        return (
            <main className="products-page">
                <h1>No products found</h1>
                <p>There are currently no products available.</p>
            </main>
        );
    }

    // NEW FUNCTIONALITY: Search match na milne par message
    if (filteredProducts.length === 0) {
        return (
            <main className="products-page">
                <div className="products-page-header">
                    <h1>Our Products</h1>
                    <p>Explore our complete collection</p>
                </div>

                <SearchBar search={search} setSearch={setSearch} />

                <h2>No matching products found</h2>
                <p>Try searching with a different product name.</p>
            </main>
        );
    }

    return (
        <main className="products-page">
            <div className="products-page-header">
                <h1>Our Products</h1>
                <p>Explore our complete collection</p>
            </div>

            {/* NEW FUNCTIONALITY: Search state ko SearchBar se connect karna */}
            <SearchBar search={search} setSearch={setSearch} />

            <ProductFilters />

            {/* NEW FUNCTIONALITY: Filtered products ProductGrid ko dena */}
            <ProductGrid products={filteredProducts} />

            <Pagination />
        </main>
    );
}

export default Products;
