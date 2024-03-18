import {signOut} from "firebase/auth";
import {auth} from '../utils/firebase.jsx'
import { useNavigate } from "react-router-dom";



const Header = () => {
  const handleSignOut=()=>{
    const navigate=useNavigate()
   
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex=col justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex justify-between p-2">
        <img
          className="h-12 w-12 m-2 rounded-md"
          src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
          alt="usericon"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
