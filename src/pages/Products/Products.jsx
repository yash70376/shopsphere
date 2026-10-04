import { useState } from "react";
import "./Products.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/Pagination/Pagination";

function Products() {

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

    const [sort, setSort] = useState("default");

    const [currentPage, setCurrentPage] = useState(1);


    return (
        <main className="products-page">

            <div className="products-page-header">
                <h1>Our Products</h1>

                <p>Explore our complete collection</p>
            </div>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <p>Searching for: {search}</p>

            <ProductFilters />

            <ProductGrid />

            <Pagination />

        </main>
    );
}

export default Products;