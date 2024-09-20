import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./SearchStyles.css";
import { useEffect, useLayoutEffect, useRef } from 'react';

function SearchComponent({ setSearchTerm }) {

    const searchInputRef = useRef(null);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    return (
        <div>
            <div className='d-flex mt-3 pt-3 search-div'>
                <input ref={searchInputRef} onChange={handleSearchTermChange} className="form-control" placeholder="Search" />
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default SearchComponent;
