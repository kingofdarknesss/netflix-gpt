import { useSelector } from "react-redux"
import MovieList from './MovieList';


const GptMovieSuggestions = () => {
   const {movieNames,movieResults}=useSelector(store=>store.gpt);

   if(!movieNames) return null;

  


  return (
  <div className="absolute   w-full">



    {movieNames.map((movieName,index)=>(<MovieList key={movieName} title={movieName} movList={movieResults[index]}/>))}
    
  </div>
  );
}

export default GptMovieSuggestions