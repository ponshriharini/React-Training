// ListItemsComponent.js
import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import "./ListItemStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import useSort from "../hooks/useSort";

function ListItemsComponent({ filteredItems }) {
    const { dispatch } = useContext(ItemContext);
    const { setSortColumn, setSortDirection, sortedItems } = useSort(filteredItems);

    const handleRemove = (index) => {
        dispatch({ type: 'REMOVE_ITEM', payload: index });
    };

    const setSortConditions = (column, direction) => {
        setSortColumn(column);
        setSortDirection(direction);
    };

    return (
        <div className="items-table">
            <div className="row mt-3">
                <div className="col">
                    <div className="item-header">
                        <h4>Name</h4>
                        <div className="sort-icons d-flex">
                            <FontAwesomeIcon
                                className="icon"
                                onClick={() => setSortConditions("name", "asc")}
                                icon={faArrowUp}
                            />
                            <FontAwesomeIcon
                                className="icon"
                                onClick={() => setSortConditions("name", "desc")}
                                icon={faArrowDown}
                            />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item-header">
                        <h4>Description</h4>
                        <div className="sort-icons d-flex">
                            <FontAwesomeIcon
                                className="icon"
                                onClick={() => setSortConditions("description", "asc")}
                                icon={faArrowUp}
                            />
                            <FontAwesomeIcon
                                className="icon"
                                onClick={() => setSortConditions("description", "desc")}
                                icon={faArrowDown}
                            />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>Actions</h4>
                </div>
            </div>
            <hr />
            {sortedItems.length === 0 ? (
                <div className="row">
                    <div className="col">
                        <p>No items available</p>
                    </div>
                </div>
            ) : (
                sortedItems.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="col">{item.name}</div>
                        <div className="col">{item.description}</div>
                        <div className="col">
                            <button
                                className="btn btn-danger mb-3"
                                onClick={() => handleRemove(index)}
                            >
                                Remove
                            </button>
                        </div>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default ListItemsComponent;
