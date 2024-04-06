import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice.jsx";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAY } from "../utils/constants.jsx";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(NOW_PLAY, API_OPTIONS);
    const json = await data.json();
    //  console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
