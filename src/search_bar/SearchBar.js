import React, { useState, useCallback } from 'react';

function SearchBar(props) {
    const [term, setTerm] = useState("search term");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    console.log(`The search is for: ${term}`);

    const search = useCallback((event) => {
        props.onSearch(term);
    }, [term, props.onSearch]);

    return (
        <>  
            <label htmlFor='search'>{props.children}</label>      
            <input 
                id='search'
                type='text'
                value={props.value} 
                onChange={props.onChange}
            />
            <button>Go</button>
        </>

    )
}

export default SearchBar;