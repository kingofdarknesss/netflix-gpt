import { useSelector } from "react-redux";
import MovieList from "./MovieList"



const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className="text-black scrollbar-hide">
      <MovieList title={"Now Playing"} movList={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movList={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movList={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movList={movies.nowPlayingMovies} />
    </div>
  );
}

export default SecondaryContainer