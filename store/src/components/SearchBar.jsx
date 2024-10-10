import React from 'react'

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
        <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        />
        <div>
            <input 
            type="checkbox" 
            checked={stockChecked} 
            onChange={(e) => stockChecked}/>
            Product is in stock
        </div>
    </div>
  )
};

export default SearchBar;
