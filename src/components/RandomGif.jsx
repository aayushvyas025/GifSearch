import Gif from "./Gif";

function RandomGif({ gifData, fetchGif }) {

  async function handleChangeGif() {
    await fetchGif();
  }

  return (
    <div className="random-gif"> 
    <h1>Random Gif</h1>
      <Gif
        title={gifData?.data?.title}
        gif={gifData?.data?.images?.downsized_large?.url}
      />
      <button onClick={async () => await handleChangeGif()} type="button">
        Find More
      </button>
    </div>
  );
}

export default RandomGif;
