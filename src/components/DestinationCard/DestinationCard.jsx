/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  console.log(destination);
  const { currency, description, id, image, name, price } = destination;
  return (
    <div className="backdrop-blur-3xl border rounded-3xl border-yellow-300">
      <img className="w-full h-60 rounded-3xl" src={image} alt="" />
      <div className="text-white p-5">
        <h2 className="text-xl md:text-3xl font-semibold">{name}</h2>
        <p className="mt-3">{description.length > 250 ? description.slice(0,250)+"..." : description}</p>
        <p className="my-5">
          Price: {price} / {currency}
        </p>
        <Link to={`/booked/${id}`}>
          <button className="text-xl px-5 py-2  bg-orange-400">Booking</button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
