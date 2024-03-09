
import { useState } from 'react';
import Header from './Header'


 

 


const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const toggleSignInForm = () => {
      setisSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bg"
        />
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-24 mx-auto right-0 left-0 pl-2 text-white bg-opacity-80 rounded-xl">
        <h1 className="text-4xl my-4 font-bold ml-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="name"
          className="m-4 p-4 w-full "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="m-4 p-4 w-full "
        />
        <input
          type="password"
          placeholder="Password"
          className="m-4 p-4 w-full "
        />
        <button className="p-4  bg-red-700 te w-full ml-3 m-6  rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in"}
        </p>
      </form>
    </div>
  );
}

export default Login