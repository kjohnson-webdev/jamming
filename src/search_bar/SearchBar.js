import React, { useState, useCallback } from 'react';

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback((event) => {
        props.onSearch(term);
    }, [term, props.onSearch]);

    return (
        <>  
            <label htmlFor='search'>{props.children}</label>      
            <input 
                id='search'
                type='text'
                value={term} 
                onChange={handleTermChange}
            />
            <button onClick={() => props.onSearch(term)}>Go</button>
        </>

    )
}

export default SearchBar;