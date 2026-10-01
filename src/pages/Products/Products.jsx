import "./Products.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/Pagination/Pagination";

function Products() {
    return (
        <main className="products-page">

            <div className="products-page-header">
                <h1>Our Products</h1>
                <p>Explore our complete collection</p>
            </div>

            <SearchBar />

            <ProductFilters />

            <ProductGrid />

            <Pagination />

        </main>
    );
}

export default Products;