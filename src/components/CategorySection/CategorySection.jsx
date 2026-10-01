import "./CategorySection.css";
import CategoryCard from "../CategoryCard/CategoryCard";

function CategorySection() {

    let categories = [
        {
            name: "Electronics",
            icon: "💻",
            count: "12 Items"
        },
        {
            name: "Fashion",
            icon: "👕",
            count: "24 Items"
        },
        {
            name: "Home",
            icon: "🛋️",
            count: "18 Items"
        },
        {
            name: "Accessories",
            icon: "🕶️",
            count: "15 Items"
        }
    ];

    return (
        <section className="category-section">

            <div className="category-header">
                <h2>Shop by Category</h2>
                <p>Explore our popular categories</p>
            </div>

            <div className="category-grid">

                {categories.map(function(category) {
                    return (
                        <CategoryCard
                            key={category.name}
                            category={category}
                        />
                    );
                })}

            </div>

        </section>
    );
}

export default CategorySection;