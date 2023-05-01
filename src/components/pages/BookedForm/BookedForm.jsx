/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    RangeDatePicker,
  } from "react-google-flight-datepicker";
  import "react-google-flight-datepicker/dist/main.css";
  
const BookedForm = ({destinationData}) => {


    const bookSubmit =(e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={bookSubmit} className="bg-white relative rounded-md p-6">
            <div>
                <label htmlFor="Origin">Origin</label>
                <input className="w-full bg-gray-200 py-3 rounded-md mb-3 mt-3 px-3 text-black font-semibold text-lg" type="text" name="origin" />
            </div>
            <div>
                <label htmlFor="Destination">Destination</label>
                <input value={destinationData?.name} readOnly className="w-full bg-gray-200 py-3 rounded-md mb-3 mt-3 px-3 text-black font-semibold text-lg" type="text" name="Destination" />
            </div>
            <div>
                <label htmlFor="">Date Picker</label>
            <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
      />
            </div>
            <div className="mt-5">
                <button className="w-full py-3 bg-orange-400 text-xl font-semibold">Start Booking</button>
            </div>
        </form>
    );
};

export default BookedForm;