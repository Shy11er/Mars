import React from "react";
import { Link } from "react-router-dom";
import { A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [1, 2, 3, 4, 5];

const TopArtists = () => {
  return (
    <div className="flex flex-col p-3 min-w-[400px] m-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold flex items-center">Top Artists</h1>
        <Link
          to="/top-artists"
          className="text-lg flex items-center text-gray-400"
        >
          See more
        </Link>
      </div>
      <Swiper
        className="w-[389px] mt-5"
        modules={[A11y, Mousewheel]}
        spaceBetween={5}
        slidesPerView={4}
        mousewheel
      >
        <SwiperSlide>
          <img
            className="rounded-full w-20 h-20 cursor-pointer"
            src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-full w-20 h-20 cursor-pointer"
            src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-full w-20 h-20 cursor-pointer"
            src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-full w-20 h-20 cursor-pointer"
            src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-full w-20 h-20 cursor-pointer"
            src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-full w-20 h-20 cursor-pointer"
            src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopArtists;
