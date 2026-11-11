import { fetchRandomGif } from "@/api/apis";
import React, { useEffect, useState } from "react";
import Gif from "./Gif";

function GifTag() {
  const [tagGif, setTagGif] = useState("");
  const [gifData, setGifData] = useState(null);

  async function handleFetchRandomGIF() {
    const { data } = await fetchRandomGif();
    console.log(data);
    setGifData(data);
  }

  useEffect(() => {
    handleFetchRandomGIF();
  }, [fetchRandomGif]);

  return (
    <div className="tag-gif">
      <h1>Random tag {tagGif} GIF</h1>
      <Gif title={gifData?.title} gif={gifData?.images?.downsized_large?.url} />
      <input
        type="text"
        value={tagGif}
        onChange={(e) => setTagGif(e.target.value)}
      />
      <button onClick={async () => await handleFetchRandomGIF()} type="button">
        Find More
      </button>
    </div>
  );
}

export default GifTag;
