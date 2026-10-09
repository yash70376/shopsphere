import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

function SearchBar() {

    const [search, setSearch] = useState("");

    // NEW FUNCTIONALITY: Search input ka reference banana
    const searchInputRef = useRef(null);

    // NEW FUNCTIONALITY: Input ko automatically focus karna
    useEffect(function() {
        searchInputRef.current.focus();
    }, []);

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Searching for:", search);
    }

    return (
        <form
            className="search-bar"
            onSubmit={handleSubmit}
        >
            <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleChange}
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;