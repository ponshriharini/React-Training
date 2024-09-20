import React, { useState, useContext } from "react";
import { ItemContext } from "./ItemContext";
import "./AddItemsStyles.css";

function AddItemComponent() {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const { dispatch } = useContext(ItemContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName && itemDescription) {
            const newItem = {
                name: itemName,
                description: itemDescription,
            };
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setItemName(""); 
            setItemDescription(""); 
        }
    };

    return (
        <div className="add-items-div">
            <form onSubmit={handleSubmit}>
                <div className="form-row row">
                    <div className="col">
                        <input
                            type="text"
                            onChange={(e) => setItemName(e.target.value)}
                            className="form-control"
                            placeholder="Item Name"
                            value={itemName}
                        />
                    </div>
                    <div className="col">
                        <textarea
                            rows="1"
                            onChange={(e) => setItemDescription(e.target.value)}
                            className="form-control"
                            placeholder="Item Description"
                            value={itemDescription}
                        />
                    </div>
                    <div className="col button-div">
                        <button className="btn btn-primary">Add Item</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddItemComponent;
