const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export async function fetchRandomGif() {
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
    console.log(data);

    return {
      success: true,
      message: data?.meta?.msg,
      randomGif: {
        image: data?.images?.images?.downsized_large?.url,
        title: data?.title,
      },
    };
  } catch (error) {
    console.error(`Error, while fetching random GIFs: ${error.message}`);
    throw error.message;
  }
}

export async function fetchGifByTag(tag) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error("Error while fetch GIF by Tag");
    }

    const data = await response.json();

    return {
      success: true,
      message: data?.meta?.msg,
      tagGif: {
        image: data?.images?.images?.downsized_large?.url,
        title: data?.title,
      },
    };
  } catch (error) {
    console.error(`Error, while fetching gif by tag: ${error.message}`);
    throw error.message;
  }
}
