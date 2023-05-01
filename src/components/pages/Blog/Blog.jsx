/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";

const Blog = ({ blog }) => {
  const {
    roomTitle,
    baths,
    bedrooms,
    beds,
    description,
    guests,
    id,
    image,
    price,
    review,
  } = blog;
  return (
    <div className="flex gap-3">
      <figure>
        <img className="w-64 max-w-full h-44" src={image} alt="" />
      </figure>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-medium">{roomTitle}</h2>
        <div className="text-sm font-light flex items-center gap-2">
          <p>{guests} guests</p>
          <p>{bedrooms} bedrooms</p>
          <p>{beds} beds</p>
          <p>{baths} baths</p>
        </div>
        <p className="text-sm font-normal">{description.slice(0, 50)}</p>
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={review} readOnly /> <span>{review}</span>
          </p>
          <p className="font-semibold text-xl">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
