import React from "react";

function GifSearch({ value, onChange, onClick, type = "text", disabled }) {
  return (
    <div className="search-bar">
      <input type={type} value={value} onChange={onChange} />
      <button
        onClick={onClick}
        type="submit"
        disabled={disabled}
      >
        Find More
      </button>
    </div>
  );
}

export default GifSearch;
