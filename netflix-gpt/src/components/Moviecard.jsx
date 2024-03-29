import { POSTER_URL } from "../utils/constants"


const Moviecard = ({PosterPath}) => {
  return (
    <div className="w-48 p-2 bg-black">
      <img className="rounded-xl" src={ POSTER_URL + PosterPath} alt="posters" />
    </div>
  )
}

export default Moviecard