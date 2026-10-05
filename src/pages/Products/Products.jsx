import { useEffect, useState } from "react";

import "./Products.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/Pagination/Pagination";

function Products() {

    // NEW FUNCTIONALITY: Products data ko state mein store karna
    const [products, setProducts] = useState([]);

    // NEW FUNCTIONALITY: Product loading status track karna
    const [loading, setLoading] = useState(true);

    // NEW FUNCTIONALITY: Product loading error store karna
    const [error, setError] = useState("");

    // NEW FUNCTIONALITY: Component load hone ke baad product data load karna
    useEffect(function() {

        console.log("Products page loaded");

        // NEW FUNCTIONALITY: Temporary request simulation
        const timer = setTimeout(function() {

            const productData = [
                {
                    id: "p1",
                    name: "SonicPro Wireless Headphones",
                    price: 199.99
                },
                {
                    id: "p2",
                    name: "Aura Smartwatch Series 5",
                    price: 149.50
                },
                {
                    id: "p3",
                    name: "Minimalist Leather Sneakers",
                    price: 89.99
                }
            ];

            setProducts(productData);

            // NEW FUNCTIONALITY: Data load hone ke baad loading band karna
            setLoading(false);

        }, 1500);

        // NEW FUNCTIONALITY: Effect cleanup
        return function() {
            clearTimeout(timer);
        };

    }, []);

    // NEW FUNCTIONALITY: Loading UI
    if (loading) {
        return (
            <main className="products-page">
                <h1>Loading products...</h1>
            </main>
        );
    }

    // NEW FUNCTIONALITY: Error UI
    if (error) {
        return (
            <main className="products-page">
                <h1>{error}</h1>
            </main>
        );
    }

    return (
        <main className="products-page">

            <div className="products-page-header">
                <h1>Our Products</h1>
                <p>Explore our complete collection</p>
            </div>

            <SearchBar />

            <ProductFilters />

            {/* NEW FUNCTIONALITY: Loaded products ko ProductGrid ko dena */}
            <ProductGrid products={products} />

            <Pagination />

        </main>
    );
}

export default Products;