/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const LeftSideContent = ({ dnSingleContent,children }) => {
  return (
    <>
      <h1 className="text-3xl md:text-6xl font-bold text-white">{dnSingleContent?.name}</h1>
      <p className="text-lg md:font-medium text-white">
        {dnSingleContent?.description.length > 250 ? dnSingleContent?.description.slice(0,250)+"..." : dnSingleContent?.description}
      </p>
      {children && children}
    </>
  );
};

export default LeftSideContent;
