
import Gif from "./Gif";

function GifTag({gifData, gifTag, fetchGif, setGifTag}) {
 

  async function handleChangeGifByTag() {
    await fetchGif();
  }



  return (
    <div className="tag-gif">
      <h1>Gif User Search</h1>
        <input
        type="text"
        value={gifTag}
        onChange={(e) => setGifTag(e.target.value)}
      />
      <button onClick={async () => handleChangeGifByTag()} type="button">
        Find More
      </button>
      <Gif title={gifData?.data?.title} gif={gifData?.data?.images?.downsized_large?.url} />
    </div>
  );
}

export default GifTag;
