import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div id="search-span">
      <span>
        Search: {""}
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
