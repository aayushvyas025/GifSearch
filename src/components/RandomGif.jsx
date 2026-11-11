import { fetchRandomGif } from "@/api/apis";
import { useEffect, useState } from "react";
import Gif from "./Gif";

function RandomGif() {
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
    <div className="random-gif">
      <Gif title={gifData?.title} gif={gifData?.images?.downsized_large?.url} />
      <button onClick={async () => await handleFetchRandomGIF()} type="button">
        Find More
      </button>
    </div>
  );
}

export default RandomGif;
