/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser, forgetPass } = useContext(AuthContext);
  const [error,setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const emailValue = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    setError("")
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    
      loginUser(email, password)
        .then((res) => {
          const currentUser = res.user;
          console.log(currentUser);
          navigate(from,{replace:true})
          toast.success("login success")
        })
        .catch((err) => {
          setError(err.message);
        });
    
  };

  const handleForgetPass = () => {
    const email = emailValue.current.value;
    if (!email) {
      toast.error("please enter email");
      return;
    }

    forgetPass(email)
      .then(() => {
        toast.success("Password reset link send in your email");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-full md:w-4/12 mx-auto">
      <div className="border border-gray-400 px-12 py-9 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleLogin} className="py-5">
          <div className="relative z-0 w-full mb-6 group">
            <input
              ref={emailValue}
              required
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="flex  gap-3 flex-col md:flex-row items-center justify-between  mb-8">
            <label className="flex items-center gap-2" htmlFor="">
              <input type="checkbox" name="checkbox" id="" />
              <span className="font-semibold">Remember Me</span>
            </label>
            <button
              onClick={handleForgetPass}
              type="button"
              className="text-yellow-400 underline"
            >
              Forgot Password
            </button>
          </div>
          <button
            className="text-black w-full bg-yellow-400 py-3"
          >
            Login
          </button>
        </form>
        <p className="text-center font-semibold ">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="underline text-yellow-400 font-normal"
          >
            Create an account
          </Link>
        </p>
        <p className="text-center text-red-600 mt-3">{error}</p>
      </div>
      <div className=" mx-10 flex items-center gap-5 my-4">
        <div className="h-0.5 w-full bg-gray-300"></div>
        <p className="text-xl text-gray-600 font-medium">or</p>
        <div className="h-0.5 w-full bg-gray-300"></div>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
