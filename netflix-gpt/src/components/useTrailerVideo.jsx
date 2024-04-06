import { API_OPTIONS, VIDEO_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      VIDEO_API + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const trailer = json.results.filter((video) => video.type === "Trailer");
    // console.log(trailer[0]);
    dispatch(addMovieVideos(trailer[0]));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
