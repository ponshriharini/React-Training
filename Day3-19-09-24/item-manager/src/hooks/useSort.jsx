// useSort.js
import { useState } from 'react';

const useSort = (items) => {
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');

    const sortedItems = [...items].sort((a, b) => {
        if (!sortColumn) return 0; 

        if (sortDirection === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });

    return { setSortColumn, setSortDirection, sortedItems };
};

export default useSort;
