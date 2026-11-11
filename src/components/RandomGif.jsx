import Gif from "./Gif";

function RandomGif({ gifData, fetchGif }) {

  async function handleChangeGif() {
    await fetchGif();
  }

  return (
    <div className="random-gif"> 
    <h1>Random Gif</h1>
      <Gif
        title={gifData?.title}
        gif={gifData?.image}
      />
      <button onClick={async () => await handleChangeGif()} type="button">
        Find More
      </button>
    </div>
  );
}

export default RandomGif;
