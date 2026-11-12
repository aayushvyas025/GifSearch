import { useEffect, useState } from "react";
import Gif from "./Gif";
import useGif from "@/hooks/useGif";
import GifSearch from "./GifSearch";

function GifTag() {
  const { gifData, isLoading, fetchGif } = useGif();
  const [gifTag, setGifTag] = useState("dogs");

  useEffect(() => {
    const timeoutId = setTimeout(() => fetchGif(gifTag), 500);

    return () => clearTimeout(timeoutId);
  }, [gifTag]);

  return (
    <div className="tag-gif">
      <h2>Gif User Search</h2>
      <GifSearch
        value={gifTag}
        onChange={(e) => setGifTag(e.target.value)}
        onClick={() => fetchGif()}
        disabled={isLoading}
      />
      <Gif title={gifData?.title} gif={gifData?.image} />
    </div>
  );
}

export default GifTag;
