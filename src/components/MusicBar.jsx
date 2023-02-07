import React from "react";
import Music from "./Music";

const MusicBar = () => {
  return (
    <div className="absolute w-full h-24 flex flex-row bottom-0 left-0 rounded-t-2xl bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 justify-between items-center">
      <div className="h-full p-3 flex flex-row items-center">
        <img
          className="w-16 h-16 mx-3 rounded-full"
          src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
          alt="logo"
        />
        <div className="flex flex-col w-full">
          <h2 className="font-bold">Пушка</h2>
          <p>10AGE</p>
        </div>
      </div>
      <Music />
      <div className="volume"></div>
    </div>
  );
};

export default MusicBar;
