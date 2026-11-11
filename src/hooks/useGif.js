import { useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
function useGif() {
  const [isLoading, setIsLoading] = useState(false);
  const [gifData, setGifData] = useState(null);
  const [gifTag, setGifTag] = useState("dogs");
  const [tagGifData, setTagGifData] = useState(null);
  async function fetchRandomGif() {
    setIsLoading(true);
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
      setGifData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(`Error, while fetching random GIFs: ${error.message}`);
      throw error.message;
    }
  }

  async function fetchTagGif() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${gifTag}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error("Error while fetch Random GIFs");
      }

      const data = await response.json();
      setTagGifData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(`Error, while fetching random GIFs: ${error.message}`);
      throw error.message;
    }
  }

  return {
    gifData,
    tagGifData,
    fetchRandomGif,
    fetchTagGif,
    gifTag,
    setGifTag,
  };
}

export default useGif;
