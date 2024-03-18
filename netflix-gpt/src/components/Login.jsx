import { useState } from "react";
// import Header from "./Header";
// import Validate from './../utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

} from "firebase/auth";
import   {auth}  from "../utils/firebase.jsx";
import { useFormik } from 'formik';
import { basicSchema } from '../utils/schema.jsx';
import Header from "./Header.jsx";
import {useNavigate} from 'react-router-dom'


// import { addUser, removeUser } from "../utils/userSlice.jsx";


const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
   const [errorMessage, setErrorMessage] = useState(null);
   const navigate=useNavigate();
   
  



  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
   
    
  }


    const onSubmit=(states,actions)=>{
      if(!isSignInForm){
      createUserWithEmailAndPassword(auth, states.email, states.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
        
        actions.resetForm()
    
} else {signInWithEmailAndPassword(auth, states.email, states.password)
  .then((userCredential) => {
    // Signed in
    const {email,uid,displayName} = userCredential.user;
    navigate("/browse");
    console.log(email+" "+uid+" "+displayName);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + errorMessage);

  });
  actions.resetForm();



  }
}
     const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
       useFormik({
         initialValues: {
           email: "",
           name: "",
           password: "",
           confirmPassword: "",
           toggle: false,
           
           
         },
         validationSchema: basicSchema,
         onSubmit,
       });
  


    
 


return (
  <div>
    <Header />
    <div className="absolute">
      <img
        className="h-screen object-cover w-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="login-bg"
      />
    </div>

    <form
      onSubmit={handleSubmit}
      className="text-black  w-3/12 my-40 p-12  mx-auto bg-black  rounded-xl opacity-80 absolute top-1/3 left-1/3"
    >
      <h1 className=" font-bold text-white text-5xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignInForm && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
      )}

      {!isSignInForm && (
        <input
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className={
            errors.name
              ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-700 block w-full p-2.5 m-4 focus:ring-4 "
              : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-4 focus:ring-4 "
          }
          type="text"
          placeholder="Name"
        />
      )}
      {!isSignInForm && errors.name && touched.name && (
        <p className=" text-red-800">{errors.name}</p>
      )}

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Your Email
      </label>
      <input
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 m-4 focus:ring-4 "
            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-4 focus:ring-4 "
        }
        type="email"
        placeholder="Email"
      />
      {errors.email && touched.email && (
        <p className=" text-red-600 font-bold">{errors.email}</p>
      )}
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Password
      </label>
      <input
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlurCapture={handleBlur}
        className={
          errors.password
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 m-4 focus:ring-4 "
            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-4 focus:ring-4 "
        }
        type="password"
        placeholder="password"
      />
      {errors.password && touched.password && (
        <p className=" text-red-600 font-bold">{errors.password}</p>
      )}
      {!isSignInForm && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm Paswword
        </label>
      )}
      {!isSignInForm && (
        <input
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword
              ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 m-4 focus:ring-4 "
              : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-4 focus:ring-4 "
          }
          type="password"
          placeholder="Confirm Password"
        />
      )}
      {!isSignInForm && errors.confirmPassword && touched.confirmPassword && (
        <p className=" text-red-600 font-bold">{errors.confirmPassword}</p>
      )}
      <input
        id="default-checkbox"
        type="checkbox"
        name="toggle"
        value={values.toggle}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Remember Me
      </label>

      <button
        type="submit"
        className="p-4  bg-red-700 text-white  w-full ml-3 m-6  rounded-xl"
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="text-red-800 text-xs font-bold">{errorMessage}</p>
      <p
        className="px-4 text-sm text-white hover:cursor-pointer"
        onClick={toggleSignInForm}
      >
        {isSignInForm
          ? "New to Netflix? Sign Up Now"
          : "Already Registered? Sign in"}
      </p>
    </form>
  </div>
);
};


export default Login;