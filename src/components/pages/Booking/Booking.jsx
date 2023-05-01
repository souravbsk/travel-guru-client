/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideContent from "../../Shared/LeftSidContent/LeftSideContent";
import BookedForm from "../BookedForm/BookedForm";

const Booking = () => {
  const destinationData = useLoaderData();
  


  return (
    <div className="max-w-full w-10/12 mx-auto gap-8 flex-col md:flex-row  flex justify-between items-center">
      <div className="space-y-3 flex-1">
        <LeftSideContent dnSingleContent={destinationData}></LeftSideContent>
      </div>
      <div className="flex-1">
        <BookedForm destinationData={destinationData}></BookedForm>
      </div>
    </div>
  );
};

export default Booking;
