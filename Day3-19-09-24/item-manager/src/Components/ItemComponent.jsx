import React from "react";
import AddItemComponent from "./AddItemComponent";
import ListItemsComponent from "./ListItemsComponent";
import SearchComponent from "./SearchComponent";
import useSearch from "../hooks/useSearch";

function ItemComponent() {
    const { searchTerm, setSearchTerm, filteredItems } = useSearch();

    return (
        <div>
            <h1>ITEMS MANAGER</h1>
            <AddItemComponent />
            <SearchComponent setSearchTerm={setSearchTerm} />
            <ListItemsComponent filteredItems={filteredItems} />
        </div>
    );
}

export default ItemComponent;
