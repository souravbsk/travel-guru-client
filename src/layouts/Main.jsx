/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import brandLogo from "../assets/brandLogo.png";
export const BgProvider = createContext("");

const Main = () => {
    const [bgImg,setBgImg] = useState({});
    useEffect(() => {
        fetch('https://travel-guru-server-souravbsk.vercel.app/allDestinations')
        .then(res => res.json())
        .then(data => setBgImg(data[0]))
    },[])
    const bgInfo ={
        bgImg,
        setBgImg
    }
  return (
    <BgProvider.Provider value={bgInfo}>
      <div style={{backgroundImage:`linear-gradient(0deg, rgba(13, 4, 4, 0.452),rgba(0, 0, 0, 0.452)) ,url(${bgImg?.image})`}} className="hero-img min-h-screen">
        <Header
          textColor="white"
          brandLogo={brandLogo}
          searchBar={true}
        ></Header>
        <Outlet></Outlet>
      </div>
    </BgProvider.Provider>
  );
};

export default Main;
