import React from 'react';

const searchBox = (props) => {
    return (
        <div>
           <div className="search">
        <input
          type="text"
          name="searchBar"
          value={props.value}
          placeholder="search"
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
            </div>
        </div>
    );
};

export default searchBox;