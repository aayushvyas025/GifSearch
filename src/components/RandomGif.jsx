import useGif from "@/hooks/useGif";
import Gif from "./Gif";
import { useEffect } from "react";

function RandomGif() {
  const { gifData, isLoading, fetchGif } = useGif();

 useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div className="random-gif">
      <h2>Random Gif</h2>
      <Gif title={gifData?.title} gif={gifData?.image} />
      <button onClick={() => fetchGif()} type="button" disabled={isLoading}>
        Find More
      </button>
    </div>
  );
}

export default RandomGif;
