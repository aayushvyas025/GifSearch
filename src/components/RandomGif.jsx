import { useEffect, useState } from "react";
import Gif from "./Gif";

function RandomGif() {
  const [gifData, setGifData] = useState(null);

  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  async function fetchRandomGif(tag = "") {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error("Error while fetch Random GIFs");
      }

      const data = await response.json();
      console.log(data)
      setGifData(data);
    } catch (error) {
      console.error(`Error, while fetching random GIFs: ${error.message}`);
      throw error.message;
    }
  }

  async function handleChangeGif() {
    await fetchRandomGif();
  }

  useEffect(() => {
    fetchRandomGif();
  }, []); 

  console.log(gifData)

  return (
    <div className="random-gif">
      <Gif title={gifData?.data?.title} gif={gifData?.data?.images?.downsized_large?.url} />
      <button onClick={async () => await handleChangeGif()} type="button">
        Find More
      </button>
    </div>
  );
}

export default RandomGif;
