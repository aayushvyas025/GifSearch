import React, { useEffect } from "react";
import RandomGif from "./RandomGif";
import GifTag from "./GifTag";
import useGif from "@/hooks/useGif";

function Main() {
  const { gifData, fetchGif } = useGif();

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div>
      <RandomGif gifData={gifData} fetchGif={fetchGif} />
      <GifTag gifData={gifData}  fetchGif={fetchGif} />
    </div>
  );
}

export default Main;
