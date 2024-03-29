
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase.jsx";
import {
  onAuthStateChanged
} from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.jsx";
import { Outlet, useNavigate } from 'react-router-dom';
// import Header from './Header';
const Body = () => {
      const dispatch = useDispatch();
      const navigate=useNavigate()

      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, displayName, email } = user;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName})
              
              
            );
            navigate("/browse");
            // console.log(uid, displayName, email);
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
      }, []);

  return (
    <div className="relative scrollbar-hide">
      {/* <Header/> */}
      <Outlet/>
    </div>
  )
}

export default Body