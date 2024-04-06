import { useSelector } from "react-redux";
import useTrailerVideo from "./useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies?.movieVideos);
  // console.log(trailerVideo?.key);

  return (
    <div>
      <iframe
        className="w-screen aspect-video -m-5 scrollbar-hide"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
