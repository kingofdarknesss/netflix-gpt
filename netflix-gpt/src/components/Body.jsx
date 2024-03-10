import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase.jsx";
import {
  onAuthStateChanged
} from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.jsx";
import { Outlet } from 'react-router-dom';
import Header from './Header';
const Body = () => {
      const dispatch = useDispatch();

      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, displayName, email } = user;
            dispatch(
              addUser({ uid: uid, email: email, displayName: "vaibhav"})
            );
            console.log(uid, displayName, email);
          } else {
            dispatch(removeUser());
          }
        });
      }, []);

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Body