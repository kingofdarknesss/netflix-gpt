import Header from "./Header";
import useNowPlayingMovies from "./useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const gptToggle=useSelector(store=>store.gpt.toggleGptsearch)

  return (
    <div className=" min-h-[100vh] h-auto text-white scrollbar-hide">
      <Header />
      {gptToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
