/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const LeftSideContent = ({ dnSingleContent,children }) => {
  return (
    <>
      <h1 className="text-3xl md:text-7xl font-bold text-white">{dnSingleContent?.name}</h1>
      <p className="text-lg md:font-medium text-white">
        {dnSingleContent?.description}
      </p>
      {children && children}
    </>
  );
};

export default LeftSideContent;
