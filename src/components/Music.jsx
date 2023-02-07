import React from "react";
import { TfiReload } from "react-icons/tfi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";

const Music = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <TfiReload className="text-red-600 h-5 w-5 cursor-pointer" />
        <BiSkipPrevious className="text-cyan-400 h-10 w-10 cursor-pointer mx-10" />
        <FaPlay className="text-cyan-400 h-7 w-7 cursor-pointer" />
        <BiSkipNext className="text-cyan-400 h-10 w-10 cursor-pointer mx-10" />
        <BsShuffle className="text-red-600 h-5 w-5 cursor-pointer" />
      </div>
      <div className="flex flex-row">
        <p></p>
        <div className=""></div>
        <p></p>
      </div>
    </div>
  );
};

export default Music;
