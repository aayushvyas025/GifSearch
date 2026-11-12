import React from "react";

function Gif({ title, gif }) {
  return (
    <div>
      <img src={gif} alt={title}  className="gif" />
    </div>
  );
}

export default Gif;
