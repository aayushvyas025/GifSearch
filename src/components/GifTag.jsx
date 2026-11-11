import React, { useEffect, useState } from "react";
import Gif from "./Gif";

function GifTag() {
  const [tagGif, setTagGif] = useState("dog");
  const [gifData, setGifData] = useState(null);

  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  async function fetchGifByTag() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagGif}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error("Error while fetch Random GIFs");
      }

      const data = await response.json();
      setGifData(data);
    } catch (error) {
      console.error(`Error, while fetching random GIFs: ${error.message}`);
      throw error.message;
    }
  }

  async function handleChangeGifByTag() {
    await fetchGifByTag();
  }

  useEffect(() => {
    fetchGifByTag();
  }, []);

  return (
    <div className="tag-gif">
      <h1>Random tag {tagGif} GIF</h1>
      <Gif title={gifData?.data?.title} gif={gifData?.data?.images?.downsized_large?.url} />
      <input
        type="text"
        value={tagGif}
        onChange={(e) => setTagGifByTag(e.target.value)}
      />
      <button onClick={async () => fetchGifByTag()} type="button">
        Find More
      </button>
    </div>
  );
}

export default GifTag;
