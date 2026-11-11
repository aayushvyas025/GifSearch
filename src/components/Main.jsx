import React from "react";
import GifSearch from "./GifSearch";
import Gif from "./Gif";
import GifGrid from "./GifGrid";
import RandomGif from "./RandomGif";
import GifTag from "./GifTag";

function Main() {
  return (
    <div>
      <GifSearch />
      <GifGrid/>
      <RandomGif />
      <GifTag />
    </div>
  );
}

export default Main;
