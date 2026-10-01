function ProductCard({ product }) {
    return (
        <div className="product-card">

            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </div>

            <div className="product-info">

                <p className="product-category">
                    {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-bottom">

                    <div>
                        <span className="product-price">
                            ${product.price}
                        </span>

                        <span className="original-price">
                            ${product.originalPrice}
                        </span>
                    </div>

                    <button>
                        Add
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;