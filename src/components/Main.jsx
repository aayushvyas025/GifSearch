import React, { useEffect } from "react";
import RandomGif from "./RandomGif";
import GifTag from "./GifTag";
import useGif from "@/hooks/useGif";

function Main() {
  return (
    <div>
      <RandomGif />
      <GifTag  />
    </div>
  );
}

export default Main;
