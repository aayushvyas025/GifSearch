import {useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif() {
  const [isLoading, setIsLoading] = useState(false);
  const [gifData, setGifData] = useState(null);

  async function fetchGif(tag) {
    const API_URL = tag ? `${URL}&tag=${tag}` : URL;
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Error while fetching GIFs");
      }

      const result = await response.json();

      const gif = {
        image: result?.data?.images?.downsized_large?.url,
        title: result?.data?.title,
      };

      setGifData(gif);
      return gif;
    } catch (error) {
      console.error(`Error while fetching GIFs: ${error.message}`);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }


  return {
    gifData,
    isLoading,
    fetchGif,
  };
}

export default useGif;
