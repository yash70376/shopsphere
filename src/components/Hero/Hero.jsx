import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <p>NEW COLLECTION</p>

                <h1>
                    Shop The
                    <br />
                    New Collection
                </h1>

                <button>Shop Now</button>
            </div>

            <div className="hero-image">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                    alt="New Collection"
                />
            </div>

        </section>
    );
}

export default Hero;