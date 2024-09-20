import React, { createContext, useReducer, useEffect } from 'react';

const ItemContext = createContext();

const initialState = {
    items: [],
    lastAction: null,
};

const itemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { 
                ...state, 
                items: [...state.items, action.payload], 
                lastAction: action.type 
            };
        case 'REMOVE_ITEM':
            return { 
                ...state, 
                items: state.items.filter((_, index) => index !== action.payload), 
                lastAction: action.type 
            };
        default:
            return state;
    }
};

const ItemProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itemReducer, initialState);

    useEffect(() => {
        if (state.lastAction) {
            console.log(`Action: ${state.lastAction}, Items:`, state.items);
        }
    }, [state.items, state.lastAction]);

    return (
        <ItemContext.Provider value={{ state, dispatch }}>
            {children}
        </ItemContext.Provider>
    );
};

export { ItemContext, ItemProvider };
