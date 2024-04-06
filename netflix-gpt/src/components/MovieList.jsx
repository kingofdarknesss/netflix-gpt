import Moviecard from "./Moviecard";

const MovieList = ({ title, movList }) => {
  // console.log(movList);
  return (
    <div className="p-2 bg-black">
      <h1 className="font-bold text-3xl pt-5 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movList?.map((movie) => (
            <Moviecard key={movie.id} PosterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
