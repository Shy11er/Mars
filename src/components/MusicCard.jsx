import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const MusicCard = ({
  imageUrl = "https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg",
  title = "Пушка",
  gang = "10AGE",
}) => {
  return (
    <div className="w-60 p-3 rounded-xl bg-[#2b2d8dc5] m-3 relative">
      <div className="bg-[#000] w-[216px] h-[216px] z-10 absolute top-3 left-1.2 hover:opacity-70 opacity-0 flex justify-center items-center">
        <AiFillPlayCircle
          size={40}
          className="text-white cursor-pointer hover:text-gray-400"
        />
      </div>
      <img src={imageUrl} alt="logo" />
      <h1 className="text-lg font-bold text-white leading-6 my-1">{title}</h1>
      <p>{gang}</p>
    </div>
  );
};

export default MusicCard;
