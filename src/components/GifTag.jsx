import { useState } from "react";
import Gif from "./Gif";

function GifTag({ gifData, fetchGif }) {
  const [gifTag, setGifTag] = useState("dogs");
  async function handleChangeGifByTag(tag) {
    await fetchGif(tag);
  }

  return (
    <div className="tag-gif">
      <h1>Gif User Search</h1>
      <input
        type="text"
        value={gifTag}
        onChange={(e) => setGifTag(e.target.value)}
      />
      <button onClick={async () => handleChangeGifByTag(gifTag)} type="button">
        Find More
      </button>
      <Gif title={gifData?.title} gif={gifData?.image} />
    </div>
  );
}

export default GifTag;
