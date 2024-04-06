import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants.jsx";
import { useRef } from "react";
// import openai from "./openai.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants.jsx";
import { addGptMovieResult } from "../utils/gptSlice.jsx";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(
      
    );

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "assume you are a movie reccomendation system suggest me movie for the query:" +
      searchText.current.value +
      ". only give me 5 movie name, comma separated, like the example result given ahead. example result:gadar,aquaman,ironman,leo,animal. only name";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    // console.log(text);
    // console.log(text.split(","));
    const gptMovies = text.split(",");

    const movieData = gptMovies.map((movie) => searchMovieTMDB(movie));
    // console.log(movieData);
    const tmdbResults = await Promise.all(movieData);
    // console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  };

  return (
    <div className="pb-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pt-[10%] w-1/2 ml-[23%]"
      >
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        ></label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={searchText}
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={lang[langKey].gptSearchPlaceholder}
            required
          />
          <button
            onClick={handleGptSearchClick}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
