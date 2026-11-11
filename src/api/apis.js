const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export async function fetchRandomGif(tag = "") {
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

    return data;
  } catch (error) {
    console.error(`Error, while fetching random GIFs: ${error.message}`);
    throw error.message;
  }
}
