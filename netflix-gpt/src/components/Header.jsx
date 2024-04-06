import {signOut} from "firebase/auth";
import {auth} from '../utils/firebase.jsx'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice.jsx";

import { LOGO_URL,SUPPORTED_LANGUAGES,USER_ICON } from "../utils/constants.jsx";
import { toggleGptSearchView } from "../utils/gptSlice.jsx";
import {changeLanguage} from "../utils/configSlice.jsx"
import { useSelector } from "react-redux";


const Header = () => {
  var user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const gptToggle = useSelector((store) => store.gpt.toggleGptsearch);

  const handlelanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
    // console.log(e.target.value);

  }
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())


  }
  const handleSignOut=()=>{
    
   
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser())
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b  from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex justify-between p-2">
          <img
            className="h-12 w-12 m-2 rounded-md"
            src={USER_ICON}
            alt="usericon"
          />
          {gptToggle && (
            <select
              id="countries"
              onChange={handlelanguageChange}
              className=" w-30 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-red-600 group-hover:from-green-400 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {gptToggle ? "Homepage" : "GPT-Search"}
            </span>
          </button>
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
