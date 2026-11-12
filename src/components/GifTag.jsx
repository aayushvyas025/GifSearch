import { useState } from "react";
import Gif from "./Gif";
import useGif from "@/hooks/useGif";

function GifTag() {
  const { gifData, isLoading, fetchGif } = useGif();
  const [gifTag, setGifTag] = useState("dogs");

  return (
    <div className="tag-gif">
      <h1>Gif User Search</h1>
      <input
        type="text"
        value={gifTag}
        onChange={(e) => setGifTag(e.target.value)}
      />
      <button
        onClick={async () => fetchGif(gifTag)}
        type="button"
        disabled={isLoading}
      >
        Find More
      </button>
      <Gif title={gifData?.title} gif={gifData?.image} />
    </div>
  );
}

export default GifTag;
