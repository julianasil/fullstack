import React from 'react'

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
        <input type="text" value={query} onChange={(e) => console.log(e.target.value)} />
        <div>
            <input type="checkbox" />
            I'm doing fine
        </div>
    </div>
  )
};

export default SearchBar;
