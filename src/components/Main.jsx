import React, { useEffect } from "react";
import RandomGif from "./RandomGif";
import GifTag from "./GifTag";
import useGif from "@/hooks/useGif";

function Main() {
  const { gifData, fetchRandomGif, gifTag, fetchTagGif, setGifTag, tagGifData } = useGif();

  useEffect(() => {
    fetchRandomGif();
    fetchTagGif();
  }, []);

  return (
    <div>
      <RandomGif gifData={gifData} fetchGif={fetchRandomGif} />
      <GifTag
        gifData={tagGifData}
        gifTag={gifTag}
        fetchGif={fetchTagGif}
        setGifTag={setGifTag}
      />
    </div>
  );
}

export default Main;
