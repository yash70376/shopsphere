import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {

    const [search, setSearch] = useState("");

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