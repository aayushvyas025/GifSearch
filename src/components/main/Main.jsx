import React from "react";
import GifSearch from "../GifSearch/GifSearch";
import Gif from "../Gif/Gif";
import GifGrid from "../GifGrid/GifGrid";

function Main() {
  return (
    <div>
      <GifSearch />
      <GifGrid/>
      <Gif />
    </div>
  );
}

export default Main;
