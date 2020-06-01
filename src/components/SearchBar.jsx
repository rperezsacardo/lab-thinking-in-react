import React from 'react';

const SearchBar = (props) => {
  return (
    <form action="">
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="text"
        value={props.searchQuery}
        onChange={props.handleInputChange}
      />
      <label htmlFor="OnlyAvaible-input">Only avaible</label>
      <input type="checkbox" name="" id="OnlyAvaible-input" />
    </form>
  );
};

export default SearchBar;
