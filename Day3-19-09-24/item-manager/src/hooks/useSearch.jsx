import { useState, useContext } from 'react';
import { ItemContext } from '../Components/ItemContext';

const useSearch = () => {
    const { state } = useContext(ItemContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = state.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { searchTerm, setSearchTerm, filteredItems };
};

export default useSearch;
