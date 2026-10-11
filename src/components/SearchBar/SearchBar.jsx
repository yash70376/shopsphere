
import { useEffect, useRef } from "react";
import "./SearchBar.css";

// NEW FUNCTIONALITY: Parent se search state aur setter receive karna
function SearchBar({ search, setSearch }) {
    // Existing functionality: Input ko directly access karna
    const searchInputRef = useRef(null);

    // Existing functionality: Component load hone par input focus karna
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

    // Existing functionality: Search clear karke input par focus karna
    function handleClear() {
        setSearch("");
        searchInputRef.current.focus();
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
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

            <button type="button" onClick={handleClear}>
                Clear Search
            </button>
        </form>
    );
}

export default SearchBar;
