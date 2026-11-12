import useGif from "@/hooks/useGif";
import Gif from "./Gif";

function RandomGif() {
  const { gifData, isLoading, fetchGif } = useGif();

  return (
    <div className="random-gif">
      <h1>Random Gif</h1>
      <Gif title={gifData?.title} gif={gifData?.image} />
      <button onClick={() => fetchGif()} type="button" disabled={isLoading}>
        Find More
      </button>
    </div>
  );
}

export default RandomGif;
