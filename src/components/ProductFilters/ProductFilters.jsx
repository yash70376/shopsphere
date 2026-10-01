import "./ProductFilters.css";

function ProductFilters() {
    return (
        <div className="product-filters">

            <div className="filter-group">
                <label>Category</label>

                <select>
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Home</option>
                    <option>Accessories</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Sort By</label>

                <select>
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                </select>
            </div>

        </div>
    );
}

export default ProductFilters;