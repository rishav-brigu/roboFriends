import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="pa3 ba b--green b-lightest-blue"
        placeholder="robo search"
        type="search"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;
