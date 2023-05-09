/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useLoaderData } from "react-router-dom";
import TourCard from "../TourCard/TourCard";
import LeftSideContent from "../../Shared/LeftSidContent/LeftSideContent";
import { BgProvider } from "../../../layouts/Main";

export default function Home() {
  const destinationData = useLoaderData();
  const {setBgImg} = useContext(BgProvider)
  const [index,setIndex] = useState(0);


  const dnSingleContent = destinationData[index]

  useEffect(() => {
      setBgImg(dnSingleContent)
  },[index])




  console.log(index);


  return (
    <div className="grid md:ps-32 px-5 md:px-0 md:grid-cols-2 items-center gap-8">
      <div className=" space-y-4">
        <LeftSideContent dnSingleContent={dnSingleContent}>
        <div>
        <Link to={`/booked/${dnSingleContent?.id}`}>
          <button className="text-xl px-5 py-2  bg-orange-400">Booking</button>
        </Link>
      </div>
        </LeftSideContent>
      </div>
      <div className="text-white overflow-hidden py-5 ">
        <Swiper
          // install Swiper modules
          modules={[Navigation,]}
          navigation
          centeredSlides={true}
          loop={true}

          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween:10,
            },
            480:{
              slidesPerView:2,
              spaceBetween:20
            },
            760:{
              slidesPerView:2,
              spaceBetween:30
            }

          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={ (swiper) => setIndex(swiper.realIndex)}

          
        >
          {destinationData.map((dn) => (
            <SwiperSlide
            key={dn.id}>
              <TourCard
                dn={dn}
              ></TourCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
