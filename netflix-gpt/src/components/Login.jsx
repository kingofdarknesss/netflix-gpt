import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Validate from './../utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import   {auth}  from "../utils/firebase.jsx";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";


import { addUser, removeUser } from "../utils/userSlice.jsx";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const navigate=useNavigate();
  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const [errorMessage, seterrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  const handleButtonClick = ()=>{
    console.log(email.current.value)
    console.log(password.current.value);
    const message =Validate(email.current.value,password.current.value )
    seterrorMessage(message)
    if(message) return;

    
    
    
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
            navigate("/browse");
            console.log(user+"this is already a user")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }





  }




  

  return (
    <div>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bg"
        />
      </div>
      <form on onSubmit={ (e)=>e.preventDefault()}className="absolute bg-black p-12 w-3/12 my-24 mx-auto right-0 left-0 pl-2 text-white bg-opacity-80 rounded-xl">
        <h1 className="text-4xl my-4 font-bold ml-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="name"
            className="m-4 p-4 w-full bg-gray-700 "
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="m-4 p-4 w-full bg-gray-700  "
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="m-4 p-4 w-full bg-gray-700  "
        />
        <p className="text-red-700 ml-5 font-bold">{errorMessage}</p>
        <button className="p-4  bg-red-700 te w-full ml-3 m-6  rounded-xl" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="px-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in"}
        </p>
      </form>
    </div>
  );
};


export default Login;