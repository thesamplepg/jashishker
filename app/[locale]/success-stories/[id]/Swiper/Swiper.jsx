"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const SwiperImage = ({ data }) => {
  return (
    <>
      <Swiper
       
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        className="mySwiper"
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
      >
        {data.map((res, i) => (
          <SwiperSlide key={i}>
            <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={res.image}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperImage;
