/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import googleIcon from "../../../assets/images/icons/google.png";
import facebookIcon from "../../../assets/images/icons/fb.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGogleSignIN =() => {
        googleSignIn()
        .then(res => {
            navigate("/",{replace:true})
        })
    }
  return (
    <div className="mb-5">
      <div className="space-y-3 w-10/12 mx-auto">
        <button className="flex rounded-full border-2 p-3 items-center w-full">
          <img className="w-8 h-8" src={facebookIcon} alt="" />
          <div className="text-center text-lg text-black mx-auto">
            <span>Continue with Facebook</span>
          </div>
        </button>
        <button onClick={handleGogleSignIN} className="flex rounded-full border-2 p-3 items-center w-full">
          <img className="w-8 h-8" src={googleIcon} alt="" />
          <div className="text-center text-lg text-black mx-auto">
            <span>Continue with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
