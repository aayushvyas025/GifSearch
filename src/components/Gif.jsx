import React from "react";

function Gif({ title, gif }) {
  return (
    <div>
      <img src={gif} alt={title} width={"500"} className="gif" />
    </div>
  );
}

export default Gif;
