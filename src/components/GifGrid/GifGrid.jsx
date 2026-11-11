import { fetchRandomGif } from "@/api/apis";
import React, { useEffect } from "react";

function GifGrid() {

  useEffect(() => {
    fetchRandomGif(); 
  }, []);
  return <div>GifGrid</div>;
}

export default GifGrid;
