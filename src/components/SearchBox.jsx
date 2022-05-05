import React from "react";
import "./SearchBox.scss";

const searchBox = (props) => {
  return (
    <div className="search">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default searchBox;
