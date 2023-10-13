import * as React from 'react';

function SearchBar({ value, onChange, children}) {
    return (
        <>  
            <label htmlFor='search'>{children}</label>      
            <input 
                id='search'
                type='text'
                value={value} 
                onChange={onChange}
            />
            <button>Go</button>
        </>

    )
}

export default SearchBar;